import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: string[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
      },
      (error) => {
        alert(error);
      }
    );
  }

  getCategories() {
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
      },
      (error) => {
        alert(error);
      }
    );
  }

  filterProducts(event: any) {
    let value = event.target.value;
    (value == 'all') ? this.getProducts() : this.getProductsByCategory(value);
  }

  getProductsByCategory(value: any) {
    this.service.getProductsByCategory(value).subscribe(
      (res: any) => {
        console.log(res);
        this.products = res;
      },
      (err) => {
        alert(err);
      }
    );
  }
}
