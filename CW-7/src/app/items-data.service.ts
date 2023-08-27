import { Injectable } from '@angular/core';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemsDataService {
  private items: Items[] =[
    {
      image: "../assets/1086566363_w640_h640_kotel-dlitelnogo-goreniya.webp",
      productName: "Boiler",
      price: 200,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint blanditiis iusto, saepe repellendus debitis eum perspiciatis quaerat eius, reiciendis odit consequuntur error autem commodi voluptates? Debitis quis autem quisquam quaerat."
    },
    {
      image: "../assets/3258931378_w640_h640_shkolnyj-podrostkovyj-ryukzak.webp",
      productName: "Backpack",
      price: 35,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint blanditiis iusto, saepe repellendus debitis eum perspiciatis quaerat eius, reiciendis odit consequuntur error autem commodi voluptates? Debitis quis autem quisquam quaerat."
    },
    {
      image: "../assets/4325379379_w640_h640_zaschischennyj-planshet-.webp",
      productName: "Tablet",
      price: 180,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint blanditiis iusto, saepe repellendus debitis eum perspiciatis quaerat eius, reiciendis odit consequuntur error autem commodi voluptates? Debitis quis autem quisquam quaerat."
    },
    {
      image: "../assets/4781783078_w640_h640_mehanicheskaya-begovaya-dorozhka.webp",
      productName: "Running simulator",
      price: 700,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint blanditiis iusto, saepe repellendus debitis eum perspiciatis quaerat eius, reiciendis odit consequuntur error autem commodi voluptates? Debitis quis autem quisquam quaerat."
    },
    {
      image: "./../assets/4803303280_w640_h640_velotrenazher-vertikalnyj-magnitnyj.webp",
      productName: "Equal traffic",
      price: 550,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint blanditiis iusto, saepe repellendus debitis eum perspiciatis quaerat eius, reiciendis odit consequuntur error autem commodi voluptates? Debitis quis autem quisquam quaerat."
    }
  ];
  constructor() { }
  getItems(): Items[] {
    return this.items;
  }
}
