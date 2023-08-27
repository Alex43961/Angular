import { Component, OnInit, Input } from '@angular/core';
import { ItemsDataService } from '../items-data.service';
import { Items } from '../items';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent {
  items: Items[] = [];
  constructor(
    public itemsList: ItemsDataService,
    public productService: ProductService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.items = this.itemsList.getItems()
  }
  goItem(item:any) {
    const x = item;
    console.log(x);
    this.productService.setProduct(item);
    
    this.router.navigate(['item']);

  }
}
