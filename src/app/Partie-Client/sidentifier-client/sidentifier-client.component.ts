import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-sidentifier-client',
  templateUrl: './sidentifier-client.component.html',
  styleUrls: ['./sidentifier-client.component.css']
})
export class SidentifierClientComponent implements OnInit {
  email: boolean = false;
  password: boolean = false;
  Infos = {
    userEmail:'',
    userMotDePasse: '',
  }

  constructor(private serviceUser:UserService , private route:Router) { }

  ngOnInit(): void {
    if(this.serviceUser.userAuthObject!=null){
      this.route.navigate(['/client/profile-client']); 
    }
  }
  connecter() {
    this.email = this.Infos.userEmail === '';
    this.password = this.Infos.userMotDePasse === ''
    if (this.email || this.password) {
        alert('veuiller saisir tous les champs');

      return;
    }
    else {      
      this.serviceUser.login(this.Infos).subscribe(
        resp=>{
          this.serviceUser.userAuthObject=resp   
          if(this.serviceUser.lienAchat!=null){
            this.route.navigate(['/client/details-achat-client'+this.serviceUser.lienAchat]); 

            return
          }       
          this.route.navigate(['/client/profile-client']); 
        },error=>{
          console.error("compte inrouvable : ",error);
        }
      );
            
    }
  }

}
