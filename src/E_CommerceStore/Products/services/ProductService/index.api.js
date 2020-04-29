import { create } from 'apisauce';
import { networkCallWithApisauce } from '../../utils/APIUtils';
import { apiMethods } from '../../../../Common/constants/apiConstants/APIConstants';
import { EnvironmentConstants } from '../../../../Common/constants/environmentConstants/index.js';
import endPoints from '../endPoints.js';

class ProductService {

    api
    constructor() {
        this.api = create({
            baseURL: EnvironmentConstants.BASE_URL
        });
    }

    getProductsAPI = () => {

        return networkCallWithApisauce(
            this.api,
            endPoints.ProductList, {},
            apiMethods.get
        );
    }
}

export default ProductService;
