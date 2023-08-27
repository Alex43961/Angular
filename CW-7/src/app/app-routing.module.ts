import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path: "", component:ItemsListComponent},
  {path: "item", component:ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
