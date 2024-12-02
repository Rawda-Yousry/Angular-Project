import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/Models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  productSubscription: Subscription | undefined;
  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'avaliable_pieces',
    'product_img',
    'add_to_cart',
  ];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productSubscription = this.productService
      .getProducts()
      .subscribe((products: Product[]) => {
        this.productList = products;
      });
  }
  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
