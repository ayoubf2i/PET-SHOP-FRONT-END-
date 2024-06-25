import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastePetBean } from 'src/app/Beans/lastePetBean';
import { lasteProductBean } from 'src/app/Beans/lasteProductBean';
import { specialPetBean } from 'src/app/Beans/specialPetBean';
import { PetsService } from 'src/app/Services/pets.service';
import { ProduitsService } from 'src/app/Services/produits.service';

@Component({
  selector: 'app-categories-client',
  templateUrl: './categories-client.component.html',
  styleUrls: ['./categories-client.component.css'],
})
export class CategoriesClientComponent implements OnInit {
  allChiens!: specialPetBean[];
  allChats!: specialPetBean[];
  allProduits!: lasteProductBean[];

  lasteChats: String[]=[];
  lasteChiens: String[]=[];
  lastetProduct: String[]=[];

  constructor(
    private pet_service: PetsService,
    private prod_service: ProduitsService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getAllChiens();
    this.getAllChats();
    this.getAllProduits();

    this.getLasteChats();
    this.getLasteChiens();
    this.getLasteProducts();
  }
  getAllChiens(): void {
    this.pet_service.AllChiens().subscribe(
      (response) => {
        this.allChiens = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getAllChats(): void {
    this.pet_service.AllChats().subscribe(
      (response) => {
        this.allChats = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getAllProduits(): void {
    this.prod_service.getAllProducts().subscribe(
      (response) => {
        this.allProduits = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  getLasteChats(): void {
    this.pet_service.lasteChats().subscribe(
      (data) => {
        // Extraire uniquement les IDs
        this.lasteChats = data.map((chat) => chat.idPet.toString());
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  
  getLasteChiens(): void {
    this.pet_service.lasteChiens().subscribe(
      (data) => {
        // Extraire uniquement les IDs
        this.lasteChiens = data.map((chien) => chien.idPet.toString());
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  
  getLasteProducts(): void {
    this.prod_service.getlastetProducts().subscribe(
      (data) => {
        // Extraire uniquement les IDs
        this.lastetProduct = data.map((product) => product.idProduit.toString());
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
