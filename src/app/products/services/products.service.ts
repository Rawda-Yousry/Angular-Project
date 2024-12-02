import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/Category';
import { Product } from 'src/app/Models/Product';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  catList: Category[];
  constructor(private httpService: HttpClient) {
    this.catList = [
      {
        id: 1,
        name: 'Electronics',
      },
      {
        id: 2,
        name: 'Accessories',
      },
      {
        id: 3,
        name: 'Furniture',
      },
    ];
  }
  getProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>(`${environment.api}` + 'products');
  }
}
