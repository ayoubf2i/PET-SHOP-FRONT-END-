import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchatProduitsService {

  constructor(private http: HttpClient) {}


  addProductPannier(productPannier: any) {
    return this.http.post<any>(
      'http://localhost:8080/Petshop/api/achatproduit/card-achat-produit',productPannier
    );
  }

  deleteProduct(idUser:any , idProduit:any) {
    return this.http.delete<any>(
      'http://localhost:8080/Petshop/api/achatproduit/delete-achat-product/'+idUser+'/'+idProduit
    );
  }
}
