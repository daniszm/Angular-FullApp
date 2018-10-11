import { ProductsService } from './../products.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products = [];
  productName: string;
  private productsSubscription: Subscription;

  constructor(private productsService: ProductsService) {
  }

  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    });
  }

  // onRemoveProduct(productName) {
  //   this.products = this.products.filter(p => p !== productName);
  // }

  addItem(form) {
    if (form.valid) {
      this.productsService.addProduct(form.value.productName);
    }
  }

}