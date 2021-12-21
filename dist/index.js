"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_service_1 = require("./product/product.service");
// Create a singleton for the service
var productService = new product_service_1.ProductService();
var productList = productService.getPreviewProductlist();
console.log(productList);
