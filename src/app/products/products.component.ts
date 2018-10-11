import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = ["one", "two", "three"];
  constructor() { }

  ngOnInit() {
  }

  onRemoveProduct(productName) {
    this.products = this.products.filter(p => p !== productName);
  }

}