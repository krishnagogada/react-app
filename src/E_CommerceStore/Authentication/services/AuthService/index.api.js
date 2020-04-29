import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../../../Common/constants/apiConstants/APIConstants';
import { EnvironmentConstants } from '../../../../Common/constants/environmentConstants/index.js';
import endPoints from '../endPoints.js';

class AuthService {
    api
    constructor() {
        this.api = create({
            baseURL: EnvironmentConstants.BASE_URL
        });
    }

    signInAPI = () => {

        return networkCallWithApisauce(
            this.api,
            endPoints.SignIn, {},
            apiMethods.get
        );
    }
}

export default AuthService;
