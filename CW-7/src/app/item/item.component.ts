import { Component, Input } from '@angular/core';
import { ItemsDataService } from '../items-data.service';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  product: any;

  constructor(private itemsList: ItemsDataService,
    public productService: ProductService,
    public router: Router
  ) { }

  goBack() {
    this.router.navigate(['']);
  }

  ngOnInit() {
    const items = this.productService.getProduct();
    this.product = items[items.length - 1];

    console.log(this.productService.getProduct());
  }
}
