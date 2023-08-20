import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AnimalsComponent } from './animals/animals.component';
import { DogComponent } from './animals/dog/dog.component';
import { ParrotComponent } from './animals/parrot/parrot.component';

const routes: Routes = [
  { path: "", component: ShopComponent },
  { path: "animals", component: AnimalsComponent, children: [
    { path: "dog", component: DogComponent },
    { path: "parrot", component: ParrotComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
