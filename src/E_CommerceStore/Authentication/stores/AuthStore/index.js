import { observable, action, computed } from 'mobx';
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";
import { setAccessToken, clearUserSession } from "../../utils/StorageUtils";

class AuthStore {

    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    @observable authAPIService

    constructor(signInAPI) {

        this.getUserSignInAPIStatus = API_INITIAL;
        this.getUserSignInAPIError = null;
        this.authAPIService = signInAPI;

    }

    @action.bound
    userSignIn() {

        const signInPromise = this.authAPIService.signInAPI();

        return bindPromiseWithOnSuccess(signInPromise)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError);

    }
    @action.bound
    setUserSignInAPIResponse(signInResponse) {

        signInResponse.forEach((eachObject) => { setAccessToken(eachObject.access_token) });

    }

    @action.bound
    setGetUserSignInAPIError(error) {

        this.getUserSignInAPIError = error;

    }

    @action.bound
    setGetUserSignInAPIStatus(apiStatus) {

        this.getUserSignInAPIStatus = apiStatus;

    }

    @action.bound
    userSignOut() {

        clearUserSession();

    }

}

export default AuthStore;
