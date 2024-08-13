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
  loading: boolean = false;

  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.loading = false;
        this.products = res;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }

  getCategories() {
    this.loading = true;
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.loading = false;
        this.categories = res;
      },
      (error) => {
        this.loading = false;
        alert(error);
      }
    );
  }

  filterCategory(event: any) {
    let value = event.target.value;
    (value == 'all') ? this.getProducts() : this.getProductsByCategory(value);
  }

  getProductsByCategory(value: any) {
    this.loading = true;
    this.service.getProductsByCategory(value).subscribe(
      (res: any) => {
        this.loading = false;
        this.products = res;
      },
      (err) => {
        this.loading = false;
        alert(err);
      }
    );
  }
}
