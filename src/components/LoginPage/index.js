import React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
// import { Login, UserName, Password, LoginButton } from './styledComponent.js';

@observer
class LoginPage extends React.Component {

    @observable userName = '';
    @observable password = '';

    onChangeUserName = (event) => {
        this.userName = event.target.value;
    }
    onChangepassword = (event) => {
        this.password = event.target.value;
    }
    onLoginClick = () => {

        if (this.userName === "qwer") {
            const { history } = this.props;
            history.replace('/');
        }

    }
    render() {
        return (
            <div></div>
            // <Login>
            //     <UserName type='text' defaultValue={this.userName} onChange={this.onChangeUserName}/>
            //     <Password type='password' defaultValue={this.password} onChangepassword={this.onChangepassword}/>
            //     <LoginButton onClick={this.onLoginClick}>Login</LoginButton>
            // </Login>
        );
    }
}

export default LoginPage;
