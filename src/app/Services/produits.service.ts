import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produits } from '../Beans/produitsBean';
import { lasteProductBean } from '../Beans/lasteProductBean';
@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  
  constructor(private http: HttpClient) {}

  getProductById(idPetOrProduct: any) : Observable<any> {
    return this.http.get<any>(
      'http://localhost:8080/Petshop/api/produit/get-product/'+idPetOrProduct
    );
  }

  getMostPopularProduct(): Observable<produits> {
    return this.http.get<produits>(
      'http://localhost:8080/Petshop/api/achatproduit/most-popular-product'
    );
  }
  getCountProducts(): Observable<any> {
    return this.http.get<any>(
      'http://localhost:8080/Petshop/api/produit/get-count-products'
    );
  }
  getlastetProducts(): Observable<lasteProductBean[]>{
    return this.http.get<lasteProductBean[]>(
      'http://localhost:8080/Petshop/api/produit/get-Threelatest-products'
    );
  }
  getAllProducts(): Observable<lasteProductBean[]>{
    return this.http.get<lasteProductBean[]>(
      'http://localhost:8080/Petshop/api/produit/get-all-products'
    );
  }
}
