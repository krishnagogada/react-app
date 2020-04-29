import { observable } from 'mobx';


class ProductModel {

    @observable productId
    @observable availableSizes
    @observable currencyFormat
    @observable currencyId
    @observable description
    @observable installmentsCount
    @observable isFreeShipping
    @observable price
    @observable printStyle
    @observable title
    @observable imageURL

    constructor(productObject) {

        this.productId = productObject.id;
        this.availableSizes = productObject.availableSizes;
        this.currencyFormat = productObject.currencyFormat;
        this.currencyId = productObject.currencyId;
        this.description = productObject.description;
        this.installmentsCount = productObject.installments;
        this.isFreeShipping = productObject.isFreeShipping;
        this.price = productObject.price;
        this.printStyle = productObject.style;
        this.title = productObject.title;
        this.imageURL = productObject.image;

    }

}

export default ProductModel
