/*global jest*/
/*global expect*/
import Cookie from 'js-cookie';
import { API_INITIAL, API_SUCCESS, API_FAILED, API_FETCHING } from "@ib/api-constants";

import AuthAPI from "../../services/AuthService/index.api.js";
import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";

import AuthStore from '.';

let mockSetCookie = jest.fn();
let mockRemoveCookie = jest.fn();

Cookie.set = mockSetCookie;
Cookie.remove = mockRemoveCookie;

describe("AuthStore from E Commerce Store", () => {

    let authAPI;
    let authStore;

    beforeEach(() => {
        authAPI = new AuthAPI();
        authStore = new AuthStore(authAPI);
    });

    it("should test initialising auth store", () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
    });

    it("should test userSignInAPI data fetching state", () => {

        const mockLoadingPromise = new Promise(function(resolve, reject) {});
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockLoadingPromise);
        authAPI.signInAPI = mockSignInAPI;

        authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
    })
    it("should test userSignInAPI success state", async() => {

        const mockSuccessPromise = Promise.resolve(getUserSignInResponse);
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInAPI;

        await authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
        expect(mockSetCookie).toBeCalled();

    })
    it("should test userSignInAPI failure state", async() => {

        const mockFailurePromise = Promise.reject();
        const mockSignInAPI = jest.fn();
        mockSignInAPI.mockReturnValue(mockFailurePromise);
        authAPI.signInAPI = mockSignInAPI;

        await authStore.userSignIn();
        expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);

    });

    it("should test user sign-out", () => {

        authStore.userSignOut();
        expect(mockRemoveCookie).toBeCalled();

    });

});
