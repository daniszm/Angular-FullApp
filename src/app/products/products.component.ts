import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = ["one", "two", "three"];
  productName: string;

  constructor() { }

  ngOnInit() {
  }

  onRemoveProduct(productName) {
    this.products = this.products.filter(p => p !== productName);
  }

  addItem(form) {
    if (form.valid) {
      this.products.unshift(form.value.productName);
    }
  }

}