// domain/Product.ts
export interface IProduct {
    id: number;
    name: string;
    price: number;
  }
  
  export class Product implements IProduct {
    id: number;
    name: string;
    price: number;
  
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  