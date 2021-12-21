import { Cart , CartItem} from "../cart/cart.interface";

class Customer implements Customer, CartItem{
    item: string;
    quantity: number;
    id: number;
    firstName: string;
    secondName: string;
    contact: number;
    address: string;
    items: CartItem;

    constructor(cId: number, cFirstName: string, cSecondName: string, cContact: number, cAddress: string, cartItem: CartItem[]) {
        this.id = cId;
        this.firstName = cFirstName;
        this.secondName = cSecondName;
        this.contact = cContact;
        this.address = cAddress;
        this.items = cartItem['item1'];   
    }
}
