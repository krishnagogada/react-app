import React from 'react';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import { API_INITIAL, API_SUCCESS, API_FAILED, API_FETCHING } from "@ib/api-constants";

import { getAccessToken } from '../utils/StorageUtils';
import SignIn from '../components/SignInPage/index.js';

@inject("authStore")
@observer
class SignInRoute extends React.Component {

    @observable userName = '';
    @observable password = '';
    @observable ErrorMessage = '';

    onChangeUserName = (event) => {
        this.userName = event.target.value;
    }

    onChangePassword = (event) => {
        this.password = event.target.value;
    }

    onClickSignIn = async() => {

        const { history, authStore } = this.props;
        if (this.userName.length !== 0 && this.password.length !== 0 && authStore.getUserSignInAPIError === null) {
            await authStore.userSignIn();

            if (getAccessToken()) {
                history.push("/ecommerce-store/products/");
                this.ErrorMessage = '';
            }
            else {
                this.ErrorMessage = "Network Error";
            }

        }
        else if (authStore.getUserSignInAPIError) {
            this.ErrorMessage = "Network Error";
        }
        else {
            if (this.userName.length === 0) {
                this.ErrorMessage = "Please enter username";
            }
            else {
                this.ErrorMessage = "Please enter password";
            }
        }
    }

    render() {

        if (getAccessToken()) {
            return <Redirect to = { {pathname: '/ecommerce-store/products/' }} />;
        }

        return (<SignIn userName={this.userName} onChangeUserName={this.onChangeUserName}
                        password={this.password} onChangePassword={this.onChangePassword}
                        onClickSignIn={this.onClickSignIn} errorMessage={this.ErrorMessage}
                        apiStatus={this.props.authStore.getUserSignInAPIStatus}/>);
    }
}

export default SignInRoute;
