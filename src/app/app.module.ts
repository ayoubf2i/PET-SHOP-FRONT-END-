import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilClientComponent } from './Partie-Client/acceuil-client/acceuil-client.component';
import { MenuClientComponent } from './Partie-Client/menu-client/menu-client.component';
import { BasDePageClientComponent } from './Partie-Client/bas-de-page-client/bas-de-page-client.component';
import { AproposClientComponent } from './Partie-Client/apropos-client/apropos-client.component';
import { ContactClientComponent } from './Partie-Client/contact-client/contact-client.component';
import { CategoriesClientComponent } from './Partie-Client/categories-client/categories-client.component';
import { SpecialsClientComponent } from './Partie-Client/specials-client/specials-client.component';
import { SinscrireClientComponent } from './Partie-Client/sinscrire-client/sinscrire-client.component';
import { SidentifierClientComponent } from './Partie-Client/sidentifier-client/sidentifier-client.component';
import { TermesConditionsComponent } from './Partie-Client/termes-conditions/termes-conditions.component';
import { DetailsAchatClientComponent } from './Partie-Client/details-achat-client/details-achat-client.component';
import { ProfileClientComponent } from './Partie-Client/profile-client/profile-client.component';
import { CardClientComponent } from './Partie-Client/card-client/card-client.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilClientComponent,
    MenuClientComponent,
    BasDePageClientComponent,
    AproposClientComponent,
    ContactClientComponent,
    CategoriesClientComponent,
    SpecialsClientComponent,
    SinscrireClientComponent,
    SidentifierClientComponent,
    TermesConditionsComponent,
    DetailsAchatClientComponent,
    ProfileClientComponent,
    CardClientComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
