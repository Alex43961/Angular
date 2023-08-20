import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { AnimalsComponent } from './animals/animals.component';
import { DogComponent } from './animals/dog/dog.component';
import { ParrotComponent } from './animals/parrot/parrot.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    AnimalsComponent,
    DogComponent,
    ParrotComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
