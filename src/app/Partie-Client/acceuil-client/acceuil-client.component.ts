import { Component, OnInit, HostListener } from '@angular/core';
import { PetsService } from 'src/app/Services/pets.service';
import { pets } from 'src/app/Beans/petsBean';
import { produits } from 'src/app/Beans/produitsBean';
import { ProduitsService } from 'src/app/Services/produits.service';
import { UserService } from 'src/app/Services/user.service';
import { lastePetBean } from 'src/app/Beans/lastePetBean';
import { lasteProductBean } from 'src/app/Beans/lasteProductBean';
import { Router } from '@angular/router';
@Component({
  selector: 'app-acceuil-client',
  templateUrl: './acceuil-client.component.html',
  styleUrls: ['./acceuil-client.component.css'],
})
export class AcceuilClientComponent implements OnInit {
  constructor(
    private pets_service: PetsService,
    private produits_service: ProduitsService,
    private users_service: UserService,
    private router: Router
  ) {}

  showButton: boolean = false; // Variable to control button visibility
  mostPopularChat!: pets;
  mostPopularChien!: pets;
  mostPopularProduct!: produits;
  countCats!: number;
  countDogs!: number;
  countProducts!: number;
  countUsers!: number;
  latestChats!: lastePetBean[];
  latestChiens!: lastePetBean[];
  lastetProduct!: lasteProductBean[];
  ngOnInit(): void {
    this.checkScrollPosition(); // Check scroll position initially
    this.getMostPopularPetChat(); // Get the most popular pet chat on page load
    this.getMostPopularPetChien();
    this.getMostPopularProduct();
    this.getCountCat();
    this.getCountDog();
    this.getCountProducts();
    this.getCountUsers();
    this.getLasteChats();
    this.getLasteChiens();
    this.getLasteProducts();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkScrollPosition(); // Check scroll position on scrolling
  }

  checkScrollPosition(): void {
    // Show button only if scrolled down
    this.showButton = window.pageYOffset > 100;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  }

  getMostPopularPetChat(): void {
    this.pets_service.mostPopularChat().subscribe(
      (response) => {
        this.mostPopularChat = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getMostPopularPetChien(): void {
    this.pets_service.mostPopularChien().subscribe(
      (response) => {
        this.mostPopularChien = response;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getMostPopularProduct(): void {
    this.produits_service.getMostPopularProduct().subscribe(
      (data) => {
        this.mostPopularProduct = data;
      },
      (err) => {
        console.log('Erreur de chargement des produits les plus populaires');
      }
    );
  }

  getCountCat(): void {
    this.pets_service.countChats().subscribe(
      (response) => {
        this.countCats = response.countCats;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getCountDog(): void {
    this.pets_service.countChiens().subscribe(
      (response) => {
        this.countDogs = response.countDogs;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getCountProducts(): void {
    this.produits_service.getCountProducts().subscribe(
      (Response) => {
        this.countProducts = Response.countProducts;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getCountUsers(): void {
    this.users_service.countUsers().subscribe(
      (response) => {
        this.countUsers = response.countUsers;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  getLasteChats(): void {
    this.pets_service.lasteChats().subscribe(
      (data) => {
        this.latestChats = data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getLasteChiens(): void {
    this.pets_service.lasteChiens().subscribe(
      (data) => {
        this.latestChiens = data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  getLasteProducts(): void {
    this.produits_service.getlastetProducts().subscribe(
      (data) => {
        this.lastetProduct = data;
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
