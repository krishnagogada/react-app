import React from 'react';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

import { getAccessToken } from '../../utils/StorageUtils';
import { SignInContainer, SiginForm, SignInHeading, UserName, Password, SubmitButton, DisplayErrorMessage } from './styledComponent.js';

@inject("authStore")
@observer
class SignIn extends React.Component {

    @observable userName = '';
    @observable password = '';
    @observable ErrorMessage = '';

    onChangeUserName = (event) => {
        this.userName = event.target.value;
    }

    onChangePassword = (event) => {
        this.password = event.target.value;
    }

    onClickSignIn = () => {

        const { history, authStore } = this.props;
        if (this.userName.length !== 0 && this.password.length !== 0 && authStore.getUserSignInAPIError === null) {
            authStore.userSignIn();
            setTimeout(() => {
                if (getAccessToken()) {
                    history.push("/ecommerce-store/products/");
                    this.ErrorMessage = '';
                }
                else {
                    this.ErrorMessage = "Network Error";
                }
            }, 500);
        }
        else if (authStore.getUserSignInAPIError) {
            this.ErrorMessage = "Network Error";
        }
        else {
            if (this.userName.length === 0) {
                this.ErrorMessage = "Enter Username";
            }
            else {
                this.ErrorMessage = "Enter Password";
            }
        }
    }

    render() {

        if (getAccessToken()) {
            return <Redirect to = { {pathname: '/ecommerce-store/products/' }} />;
        }

        return (
            <SignInContainer>
            <SiginForm>
                <SignInHeading>Sign in</SignInHeading>
                <UserName type="text" defaultValue={this.userName} onChange={this.onChangeUserName} placeholder="Username"/>
                <Password type="password" defaultValue={this.password} onChange={this.onChangePassword} placeholder="Password" />
                <SubmitButton onClick={this.onClickSignIn} type="button" data-testid='sign-in-button'>Sign in</SubmitButton>
                    <DisplayErrorMessage>{this.ErrorMessage}</DisplayErrorMessage>
            </SiginForm>
            </SignInContainer>
        );
    }
}

export default SignIn;
