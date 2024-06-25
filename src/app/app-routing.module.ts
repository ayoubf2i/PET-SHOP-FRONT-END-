import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilClientComponent } from './Partie-Client/acceuil-client/acceuil-client.component';
import { AproposClientComponent } from './Partie-Client/apropos-client/apropos-client.component';
import { BasDePageClientComponent } from './Partie-Client/bas-de-page-client/bas-de-page-client.component';
import { MenuClientComponent } from './Partie-Client/menu-client/menu-client.component';
import { ContactClientComponent } from './Partie-Client/contact-client/contact-client.component';
import { SpecialsClientComponent } from './Partie-Client/specials-client/specials-client.component';
import { CategoriesClientComponent } from './Partie-Client/categories-client/categories-client.component';
import { SidentifierClientComponent } from './Partie-Client/sidentifier-client/sidentifier-client.component';
import { SinscrireClientComponent } from './Partie-Client/sinscrire-client/sinscrire-client.component';
import { TermesConditionsComponent } from './Partie-Client/termes-conditions/termes-conditions.component';
import { DetailsAchatClientComponent } from './Partie-Client/details-achat-client/details-achat-client.component';
import { ProfileClientComponent } from './Partie-Client/profile-client/profile-client.component';
import { CardClientComponent } from './Partie-Client/card-client/card-client.component';



const clientRoutes: Routes = [
  { path: '', redirectTo: 'acceuil-client', pathMatch: 'full' },
  { path: 'acceuil-client', component: AcceuilClientComponent },
  { path: 'bas-de-page-client', component: BasDePageClientComponent },
  { path: 'apropos-client', component: AproposClientComponent },
  { path: 'menu-client', component: MenuClientComponent },
  { path: 'contact-client', component: ContactClientComponent },
  { path: 'specials-client', component: SpecialsClientComponent },
  { path: 'categories-client', component: CategoriesClientComponent },
  { path: 'sidentifier-client', component: SidentifierClientComponent },
  { path: 'sinscrire-client', component: SinscrireClientComponent },
  { path: 'details-achat-client/:idPetOrProduct/:categorie', component: DetailsAchatClientComponent },
  { path: 'profile-client', component: ProfileClientComponent },
  { path: 'card-client',component:CardClientComponent},
];

const routes: Routes = [
  { path: '', redirectTo: '/client/acceuil-client', pathMatch: 'full' },
  { path: 'client', children: clientRoutes },
  { path :'termes-conditions' , component:TermesConditionsComponent},
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
