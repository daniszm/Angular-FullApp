import { Subject } from "rxjs";


export class ProductsService {
    private products = ['A book'];
    productsUpdated = new Subject();

    addProduct(productName: string) {
        this.products.unshift(productName);
        this.productsUpdated.next();
    }

    getProducts() {
        return [...this.products];
    }

    deleteProduct(name) {
        this.products = this.products.filter(p => p !== name);
        this.productsUpdated.next();
    }

}