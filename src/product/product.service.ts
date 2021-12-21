import { productListMock } from './product-list.mock';
import { Product } from './product.interface';

export class ProductService {
  public getPreviewProductlist(){
    return this.fetchProductListMock().map(({ id, name, price }) => ({
      id,
      name,
      price,
    }));
  }

  public getFullProductList() {
    return this.fetchProductListMock();
  }

  private fetchProductListMock(): Product[] {
    return productListMock;
  }
}
