import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userBean } from 'src/app/Beans/userBean';
import { UserService } from 'src/app/Services/user.service';
import Stripe from 'stripe';


@Component({
  selector: 'app-sinscrire-client',
  templateUrl: './sinscrire-client.component.html',
  styleUrls: ['./sinscrire-client.component.css'],
})
export class SinscrireClientComponent implements OnInit {
  nom: boolean = false;
  email: boolean = false;
  phone: boolean = false;
  adresse: boolean = false;
  password: boolean = false;
  card: boolean = false;
  mois: boolean = false;
  annee: boolean = false;
  cvc: boolean = false;

  userInfos: userBean = {
    idPet:'',
    userNom: '',
    userEmail: '',
    userMotDePasse: '',
    userTelephone: '',
    userAdresse: '',
    userNumCart: '',
    userCvc: '',
    moisExpCart: '',
    anneeExpCart: '',
    sourceClientIdStripe:'',
	  sourceCartIdStrip:''
  };

  constructor(private router: Router, private user_service: UserService) {}

  ngOnInit(): void {}

  //add to stripe
  stripe = new Stripe(
    'sk_test_51OyypLAfJRZNY57iG5692KP0pf71AvYcyQRjEOzJCQTbkwyFPop01V3DPbBdTzz4JGVzUHgu7kRIUsUhiOIzClNa007kAcWtMi'
  );
  async createCustomer() {
    try {
      const customer = await this.stripe.customers.create({
        email: this.userInfos.userEmail,
        phone: this.userInfos.userTelephone,
        name: this.userInfos.userNom,
        
      });
      console.log('client ajouté:',customer);
      return customer;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de la création du client:",
        error
      );
      throw error;
    }
  }

  //card to client
  cardToken: any;
  async addCardToCustomer(customerId: string) {
    try {
      // this.token = this.obtenirTypeDeCarte(
      //   this._serviceClientPaiement.infoClientPaiement.numCard
      //);

      this.cardToken = {
        object: 'card',
        number: this.userInfos.userNumCart,
        exp_month: this.userInfos.moisExpCart,
        exp_year: this.userInfos.anneeExpCart,
        cvc: this.userInfos.userCvc,
      };

      const card = await this.stripe.customers.createSource(customerId, {
        source: this.cardToken,
      });
      console.log('Carte ajoutée avec succès:',card);
      return card;
    } catch (error) {
      console.error(
        "Une erreur s'est produite lors de l'ajout de la carte:",
        error
      );
      throw error;
    }
  }

  //add to BD
  async inscrire() {
    this.nom = this.userInfos.userNom === '';
    this.email = this.userInfos.userEmail === '';
    this.phone = this.userInfos.userTelephone === '';
    this.adresse = this.userInfos.userAdresse === '';
    this.password = this.userInfos.userMotDePasse === '';
    this.card = this.userInfos.userNumCart === '';
    this.annee = this.userInfos.anneeExpCart === '';
    this.mois = this.userInfos.moisExpCart === '';
    this.cvc = this.userInfos.userCvc === '';

    if (
      this.nom ||
      this.email ||
      this.phone ||
      this.password ||
      this.adresse ||
      this.cvc ||
      this.card ||
      this.annee ||
      this.mois
    ) {
      alert('veuillez remplire tous les champs');

      return;
    } else {

      const customer = await this.createCustomer();
      this.userInfos.sourceClientIdStripe=customer.id;

      const card = await this.addCardToCustomer(customer.id);
      this.userInfos.sourceCartIdStrip = card.id;


      this.user_service.addUser(this.userInfos).subscribe(
        (response) => {
          console.log("response", response);
          console.log("inscription reussie", response);
          alert('inscription reussie!');
          this.router.navigate(['/client/sidentifier-client']);

        },
        (error) => {
          console.log("error", error);
        }
      );
    }
  }
}
