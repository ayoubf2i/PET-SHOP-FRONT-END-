import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AchatPetsService {


  constructor(private http: HttpClient) {}

  addPetPannier(pet: any) {
    return this.http.post<any>(
      'http://localhost:8080/Petshop/api/achatpet/card-achat-pet',pet
    );
  }

  deletePet(idUser: any , idPet:any) {
    return this.http.delete<any>(
      'http://localhost:8080/Petshop/api/achatpet/delete-achat-pet/'+idUser+'/'+idPet
    );
  }
}
