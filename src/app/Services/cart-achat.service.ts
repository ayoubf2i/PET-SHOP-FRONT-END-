import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartAchatService {


  constructor(private http: HttpClient) {}

  getCardByIdUser(idUser:any) : Observable<any> {
    return this.http.get<any>(
      'http://localhost:8080/Petshop/api/achatCart/get-card/'+idUser
    );
  }

  paiement(infoPaiement: any) {
    return this.http.post<any>(
      'http://localhost:8080/Petshop/api/achatCart/card-paiement',infoPaiement
    );
  }

}
