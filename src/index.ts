import { ProductService} from './product/product.service';

// Create a singleton for the service

const productService = new ProductService();

const productList = productService.getPreviewProductlist();

console.log(productList);