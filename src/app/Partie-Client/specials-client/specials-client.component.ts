import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { specialPetBean } from 'src/app/Beans/specialPetBean';
import { PetsService } from 'src/app/Services/pets.service';

@Component({
  selector: 'app-specials-client',
  templateUrl: './specials-client.component.html',
  styleUrls: ['./specials-client.component.css'],
})
export class SpecialsClientComponent implements OnInit {
  constructor(private pet_service: PetsService , private router:Router) {}
  specialchats!: specialPetBean[];
  specialchiens!: specialPetBean[];

  ngOnInit(): void {
    this.getSpecialCats();
    this.getSpecialChiens();
  }

  getSpecialCats(): void {
    this.pet_service.specialChats().subscribe(
      (response) => {
        this.specialchats = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getSpecialChiens(): void {
    this.pet_service.specialChiens().subscribe(
      (response) => {
        this.specialchiens = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  acheter(idPetOrProduct: string, categorie: string): void {
    // Redirection vers la route avec les paramètres id et categorie
    this.router.navigate(['/client/details-achat-client', idPetOrProduct, categorie]);
  }
}
