import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AchatPetsService } from 'src/app/Services/achat-pets.service';
import { AchatProduitsService } from 'src/app/Services/achat-produits.service';
import { CartAchatService } from 'src/app/Services/cart-achat.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css']
})
export class CardClientComponent implements OnInit {

  constructor(private serviceCart:CartAchatService , private serviceUser:UserService , private router:Router , private serviceAchatProduct:AchatProduitsService , private serviceAchatPet:AchatPetsService) { }

  cart:any;
  total = 0;


  ngOnInit(): void {
    if(this.serviceUser.userAuthObject==null){
      this.router.navigate(['/client/sidentifier-client']);

    }
    this.serviceCart.getCardByIdUser(this.serviceUser.userAuthObject.idUser).subscribe(
      resp=>{
        this.cart=resp;
        this.total=0;
        this.calculateTotal()
        console.log(this.cart);
        
      },error=>{
        this.cart=null;
        this.total=0;
        alert("Pannier est Vide !! ")
      }
    )
  }

  supprimer(item:any){
    if(item.detailsMapCart.idProduit){
      this.serviceAchatProduct.deleteProduct(this.serviceUser.userAuthObject.idUser , item.detailsMapCart.idProduit).subscribe(
        resp=>{
          alert("Achats de produits supprimés avec succès")
          this.ngOnInit();
        }
      )
    }
    if(item.detailsMapCart.idPet){
      this.serviceAchatPet.deletePet(this.serviceUser.userAuthObject.idUser,item.detailsMapCart.idPet).subscribe(
        resp=>{
          alert("Achats de Pets supprimés avec succès")
          this.ngOnInit();

        }
      )
    }
  }

  calculateTotal() {
    
    for (let item of this.cart) {
      if (item.detailsMapCart.prixProduit) {
        this.total += parseInt(item.detailsMapCart.prixProduit) * parseInt(item.detailsMapCart.quantiteProduit);
      } else if (item.detailsMapCart.prixPet) {
        this.total += parseInt(item.detailsMapCart.prixPet) * parseInt(item.detailsMapCart.quantitePet);
      }
    }
  }

  paiement(){
    const infoPaiement ={
      idUser:+this.serviceUser.userAuthObject.idUser,
	    total:this.total,
		  sourceClientIdStripe:this.serviceUser.userAuthObject.sourceClientIdStripe,
	    sourceCartIdStrip:this.serviceUser.userAuthObject.sourceCartIdStrip
    }
    console.log(infoPaiement);
    
    this.serviceCart.paiement(infoPaiement).subscribe(
        resp=>{
          if(resp.Message=='Error'){
            alert("Error de paiement")
            this.ngOnInit()
          }else{
            alert("Paiement Avec succes")
            this.ngOnInit()
          }
        }
    )
  }

}
