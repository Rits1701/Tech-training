import { Customer } from './customer.interface';

export const customerListMock: Customer[] = [
  {
    id: 1,
    firstName: 'CustomerF1',
    secondName: 'CustomerS1',
    contact: 6044245998,
    address: 'address 1',
    cart: {
      items: [  
        {},
      ]
    },
  },
  {
    id: 2,
    firstName: 'CustomerF2',
    secondName: 'CustomerS2',
    contact: 6044245999,
    address: 'address 2',
    cart: {
      items: [  
        {}   
      ]
    },
  },
  {
    id: 3,
    firstName: 'CustomerF3',
    secondName: 'CustomerS3',
    contact: 6044245979,
    address: 'address 3',
    cart: {
      items: [    
        {} 
      ]
    },
  },
];
