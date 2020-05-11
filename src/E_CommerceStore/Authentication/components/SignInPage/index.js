import React from 'react';
import { API_INITIAL, API_SUCCESS, API_FAILED, API_FETCHING } from "@ib/api-constants";

import { SignInContainer, SiginForm, SignInHeading, UserName, Password, SubmitButton, DisplayErrorMessage } from './styledComponent.js';

function SignIn(props) {
    const {
        userName,
        onChangeUserName,
        password,
        onChangePassword,
        onClickSignIn,
        errorMessage,
        apiStatus
    } = props;
    return (
        <SignInContainer>
            <SiginForm>
                <SignInHeading>Sign in</SignInHeading>
                <UserName type="text" defaultValue={userName} onChange={onChangeUserName} placeholder='Username'/>
                <Password type="password" defaultValue={password} onChange={onChangePassword} placeholder='Password' />
                <SubmitButton onClick={onClickSignIn} type="button" data-testid='sign-in-button' api={API_FETCHING}>{apiStatus===API_FETCHING ? '...Loading' : 'Sign in'}</SubmitButton>
                    <DisplayErrorMessage>{errorMessage}</DisplayErrorMessage>
            </SiginForm>
            </SignInContainer>
    );
}
export default SignIn;
