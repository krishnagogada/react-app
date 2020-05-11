/*global jest*/
/*global expect*/
import React from 'react';
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
import { API_INITIAL, API_SUCCESS, API_FAILED, API_FETCHING } from "@ib/api-constants";

import { SIGN_IN_PATH } from '../constants/routeConstants/RouteConstants.js';
import { PRODUCT_PAGE_PATH } from '../../Products/constants/routeConstants/RouteConstants.js';

import AuthAPI from "../services/AuthService/index.api.js";
import AuthStore from "../stores/AuthStore/index.js";
import getUserSignInResponse from "../fixtures/getUserSignInResponse.json";

import SignInRoute from "./SignInRoute.js";

const locationDisplay = withRouter(({ location }) => (
    <div data-testid='location-display'>{location.pathname}</div>
));

describe("Sigin Route Tests", () => {

    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthAPI();
        authStore = new AuthStore(authAPI);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render username error message', () => {

        const { getByText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}/>
            </Router>
        );

        const signinButton = getByRole('button', { name: 'Sign in' });
        fireEvent.click(signinButton);

        getByText('Please enter username');

    });

    it('should render password error message', () => {

        const { getByText, getByPlaceholderText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}/>
            </Router>
        );
        const username = 'user-text';

        const userNameField = getByPlaceholderText('Username');
        const signinButton = getByRole('button', { name: 'Sign in' });

        fireEvent.change(userNameField, { target: { value: username } });
        fireEvent.click(signinButton);

        getByText('Please enter password');

    });

    it('should submit sign-in on press enter', () => {

        const { getByText, getByPlaceholderText, getByRole, getByLabelText } = render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}/>
            </Router>
        );
        const username = 'user-text';
        const password = 'password';
        const userNameField = getByPlaceholderText('Username');
        const passwordField = getByPlaceholderText('Password');
        const signinButton = getByRole('button', { name: 'Sign in' });

        fireEvent.change(userNameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signinButton);

        waitFor(() => getByLabelText("...Loading"));
    });

    it("should render signInRoute loading state", async() => {
        const { getByLabelText, getByPlaceholderText, getByRole, debug, getByText } = render(
            <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
        );
        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);

        authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
        waitFor(() => getByRole('button', { name: "...Loading" }));
        getByRole("button", { disabled: true });

    });

    it("should render signInRoute success state", async() => {
        const history = createMemoryHistory();
        const route = SIGN_IN_PATH;
        history.push(route);

        const {
            getByPlaceholderText,
            getByRole,
            queryByRole,
            getByTestId
        } = render(
            <Provider authStore={authStore}>
                <Router history={history}>
                    <Route path={SIGN_IN_PATH}>
                        <SignInRoute />
                    </Route>
                    <Route path={PRODUCT_PAGE_PATH}>
                        <locationDisplay />
                    </Route>
                </Router>
            </Provider>
        );

        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        // const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        const mockSuccessPromise = new Promise(function(resolve, reject) {
            resolve(getUserSignInResponse);
        });
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInAPI;

        fireEvent.change(usernameField, { target: { value: username } });
        // fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);

        waitFor(() => {
            expect(
                queryByRole("button", { name: "Sign in" })
            ).not.toBeInTheDocument();
            expect(getByTestId("location-display")).toHaveTextContent(
                PRODUCT_PAGE_PATH
            );
        });
    });

    it("should render signInRoute failure state", () => {
        const { getByText, getByPlaceholderText, getByRole } = render(
            <Router history={createMemoryHistory()}>
        <SignInRoute authStore={authStore} />
      </Router>
        );

        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button", { name: "Sign in" });

        const mockFailurePromise = new Promise(function(resolve, reject) {
            reject(new Error("error"));
        }).catch(() => {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        authAPI.signInAPI = mockSignInAPI;

        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(signInButton);

        waitFor(() => {
            getByText(/Network Error/i);
        });
    });

});
