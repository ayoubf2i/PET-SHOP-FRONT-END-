import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AchatPetsService } from 'src/app/Services/achat-pets.service';
import { AchatProduitsService } from 'src/app/Services/achat-produits.service';
import { PetsService } from 'src/app/Services/pets.service';
import { ProduitsService } from 'src/app/Services/produits.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-details-achat-client',
  templateUrl: './details-achat-client.component.html',
  styleUrls: ['./details-achat-client.component.css'],
})
export class DetailsAchatClientComponent implements OnInit {
  counter: number = 1;
  maxcounter: number = 10;
  valeur!: number;

  idPetOrProduct!: string;
  categorie!: string;

  pet:any=null;
  product:any=null;

  constructor(private route: ActivatedRoute, private servicePet:PetsService , private serviceProd:ProduitsService , private serviceUser:UserService , private router:Router , private achatPet:AchatPetsService , private achatProduct:AchatProduitsService) { }

  ngOnInit(): void {
    // Récupérer les paramètres de l'URL
    this.route.params.subscribe(params => {
      this.idPetOrProduct = params['idPetOrProduct'];
      this.categorie = params['categorie'];
    });
    
    if(this.categorie=='Chiens' || this.categorie=='Chats'){      
      this.product=null;
      this.servicePet.getPetById(this.idPetOrProduct).subscribe(
        resp=>{
          this.pet=resp;
        }
      )
    }else{
      this.pet=null;
      this.serviceProd.getProductById(this.idPetOrProduct).subscribe(
        resp=>{
          this.product=resp;
        }
      )
    }

  }

  quantitePlus() {
    if (this.counter < this.maxcounter) {
      this.counter++;

      this.valeur = this.counter;
    }

  }
  quantiteminus() {
    if (this.counter >1) {
      this.counter--;
      this.valeur = this.counter;
    }
  }

  ajouterPetPannier(){
    if(this.serviceUser.userAuthObject==null){
      this.serviceUser.lienAchat='/'+this.idPetOrProduct+'/'+this.categorie
      this.router.navigate(['/client/sidentifier-client']);
    }else{
      const petPannier={
        idUser:+this.serviceUser.userAuthObject.idUser,
        idPet:+this.idPetOrProduct,
        quantitePet:this.counter
      }
      this.achatPet.addPetPannier(petPannier).subscribe(
        resp=>{
          console.log(resp);
          
          if(resp.Message=='Achat de pet effectué avec succès.'){
            alert("Achat de pet effectué avec succès, voir le pannier")
            this.router.navigate(['/client/card-client']);

          }
          else{
            alert("Error")
          }
        }
      )      
    }
    
  }

  ajouterProductPannier(){
    if(this.serviceUser.userAuthObject==null){
      this.serviceUser.lienAchat='/'+this.idPetOrProduct+'/'+this.categorie
      this.router.navigate(['/client/sidentifier-client']);
    }else{
      const productPannier={
        idUser:+this.serviceUser.userAuthObject.idUser,
        idProduit:+this.idPetOrProduct,
        quantiteProduit:this.counter
      }
      this.achatProduct.addProductPannier(productPannier).subscribe(
        resp=>{
          console.log(resp);
          
          if(resp.Message=='Achat de produit effectué avec succès.'){
            alert("Achat de produit effectué avec succès, voir le pannier")
            this.router.navigate(['/client/card-client']);

          }
          else{
            alert("Error")
          }
        }
      )      
    }
  }
}
