import { observable, action } from "mobx";
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from "@ib/api-constants";
import { bindPromiseWithOnSuccess } from "@ib/mobx-promise";

class UserStore {

    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService

    constructor(userService) {

        this.userService = userService;
        this.init();

    }

    @action
    init() {

        this.getUsersApiStatus = API_INITIAL;
        this.getUsersApiError = null;
        this.users = [];

    }

    @action.bound
    setUsersApiResponse(usersResponse) {

        this.users = usersResponse.map((user) => user.name);

    }

    @action.bound
    setUsersApiError(error) {

        this.getUsersApiError = error;
    }

    @action.bound
    getUsersAPI() {

        const usersPromise = this.userService.getUsersAPI();

        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setUsersAPIStatus, this.setUsersApiResponse)
            .catch(this.setUsersApiError);
    }

    @action.bound
    setUsersAPIStatus(apiStatus) {

        this.getUsersApiStatus = apiStatus;

    }

    @action
    clearStore() {

        this.init();

    }
}

export default UserStore;
