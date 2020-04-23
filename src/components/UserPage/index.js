import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure/index.js';
import NoDataView from '../common/NoDataView/index.js';

@inject('userStore')
@observer
class UserPage extends Component {

    componentDidMount() {
        this.doNetworkCalls();
    }

    doNetworkCalls = () => {

        const { userStore } = this.props;
        userStore.getUsersAPI();

    }

    renderUserList = () => {

        const { userStore } = this.props;
        const { users } = userStore;
        if (users.length === 0) {
            return <NoDataView/>;
        }
        return users.map((userName) => <div>{userName}</div>);

    }

    render() {
        const { userStore } = this.props;
        const { getUsersApiStatus, getUsersApiError } = userStore;

        return (

            <LoadingWrapperWithFailure 
                apiError={getUsersApiError} 
                apiStatus={getUsersApiStatus} 
                onRetryClick={this.doNetworkCalls}
                renderSuccessUI={this.renderUserList}/>
        );
    }
}

export default UserPage;
