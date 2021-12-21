import { Customer } from './customer.interface';
import { customerListMock } from './customer-list.mock';
import { ProductService} from '../product/product.service';

export class CustomerService {
  productArray: any = [];

  constructor(private productService: ProductService){
    this.productArray = this.productService.getFullProductList();
  }

  public getFullCustomerList(): Customer[] {
    return customerListMock;
  }
  
  public getProductList() {
    return this.productService.getPreviewProductlist();
  }

  add(product, idx) {
    const foundProduct = this.productArray.find(
      item => JSON.stringify(item) === JSON.stringify(product)
    );
    if (foundProduct) {
      this.productArray[idx].qtn++;
    } else {
      this.productArray.push(product);
    }
  }

  dec(added) {
    if (added.qtn != 1)
      added.qtn -= 1;
  }

  remove(id) {
    this.productArray.splice(id, 1);
  }


}