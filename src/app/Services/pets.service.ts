import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pets } from '../Beans/petsBean';
import { lastePetBean } from '../Beans/lastePetBean';
import { specialPetBean } from '../Beans/specialPetBean';
@Injectable({
  providedIn: 'root',
})
export class PetsService {

  constructor(private http: HttpClient) {}


  getPetById(idPetOrProduct: any): Observable<any> {
    return this.http.get<any>(
      'http://localhost:8080/Petshop/api/pet/get-pet/'+idPetOrProduct
    );
  }

  mostPopularChat(): Observable<pets> {
    return this.http.get<pets>(
      'http://localhost:8080/Petshop/api/achatpet/most-popular-pet-chat'
    );
  }

  mostPopularChien(): Observable<pets> {
    return this.http.get<pets>(
      'http://localhost:8080/Petshop/api/achatpet/most-popular-pet-chien'
    );
  }

  countChats(): Observable<any> {
    return this.http.get<any>(
      'http://localhost:8080/Petshop/api/pet/get-count-cats'
    );
  }
  countChiens(): Observable<any> {
    return this.http.get<any>(
      'http://localhost:8080/Petshop/api/pet/get-count-dogs'
    );
  }
  lasteChats(): Observable<lastePetBean[]> {
    return this.http.get<lastePetBean[]>(
      'http://localhost:8080/Petshop/api/pet/get-threelatest-cats'
    );
  }
  lasteChiens(): Observable<lastePetBean[]> {
    return this.http.get<lastePetBean[]>(
      'http://localhost:8080/Petshop/api/pet/get-threelatest-dogs'
    );
  }
  specialChats(): Observable<specialPetBean[]> {
    return this.http.get<specialPetBean[]>(
      'http://localhost:8080/Petshop/api/pet/get-all-special-cats'
    );
  }
  specialChiens(): Observable<specialPetBean[]> {
    return this.http.get<specialPetBean[]>(
      'http://localhost:8080/Petshop/api/pet/get-all-special-dogs'
    );
  }
  AllChiens(): Observable<specialPetBean[]> {
    return this.http.get<specialPetBean[]>(
      'http://localhost:8080/Petshop/api/pet/get-all-dogs'
    );
  }
  AllChats(): Observable<specialPetBean[]> {
    return this.http.get<specialPetBean[]>(
      'http://localhost:8080/Petshop/api/pet/get-all-cats'
    );
  }
}
