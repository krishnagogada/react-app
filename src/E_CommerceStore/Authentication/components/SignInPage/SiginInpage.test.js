/*global debug*/
/*global expect*/
import React from "react";
import { render } from "@testing-library/react";

import SignIn from '.';

describe("SignIn", () => {
    it("should render typed username", () => {
        const username = "test-user";
        const { getByPlaceholderText } = render(
            <SignIn userName={username}/>
        );
        const userNameField = getByPlaceholderText('Username');
        expect(userNameField.value).toBe(username);
    });
    it("should render typed password", () => {
        const password = "test-password";
        const { getByPlaceholderText } = render(
            <SignIn password={password} onChangePassword={()=>{}}/>
        );
        const passwordField = getByPlaceholderText('Password');
        expect(passwordField.value).toBe(password);
    });
    it("should render error message", () => {
        const errorMessage = 'Please enter Username';
        const { getByText } = render(
            <SignIn errorMessage={errorMessage}/>
        );
        expect(getByText(errorMessage)).toBeInTheDocument;

    });

});
