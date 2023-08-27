import { Injectable } from '@angular/core';
import { Items } from './items';
import { ItemsListComponent } from './items-list/items-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product:Items[] = [];

  constructor() { }

  setProduct(item:Items){   
     this.product.push(item);
    
    console.log(this.product);
    
  }
  getProduct(){
    return this.product;
  }
}
