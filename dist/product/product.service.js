"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var product_list_mock_1 = require("./product-list.mock");
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getPreviewProductlist = function () {
        return this.fetchProductListMock().map(function (_a) {
            var id = _a.id, name = _a.name, price = _a.price;
            return ({
                id: id,
                name: name,
                price: price,
            });
        });
    };
    ProductService.prototype.getFullProductList = function () {
        return this.fetchProductListMock();
    };
    ProductService.prototype.fetchProductListMock = function () {
        return product_list_mock_1.productListMock;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
/**
 * customer entity
 * cart entity
 * When instantiating a customer, automatically instantiate a cart and link it to the customer
 * Customer can see products, add/remove them from his/her cart
 */ 
