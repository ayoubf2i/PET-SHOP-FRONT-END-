import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {

  constructor(public serviceUser:UserService, private route:Router) { }

  userInfo={
    nom:"",
    email:"",
    telephone:"",
    adresse:"",
    motDePasse:""
  }

  ngOnInit(): void {
    if(this.serviceUser.userAuthObject==null){
      this.route.navigate(['/client/sidentifier-client']); 
      return;
    }

      this.userInfo.nom=this.serviceUser.userAuthObject.userNom
      this.userInfo.email=this.serviceUser.userAuthObject.userEmail
      this.userInfo.telephone=this.serviceUser.userAuthObject.userTelephone
      this.userInfo.adresse=this.serviceUser.userAuthObject.userAdresse
      this.userInfo.motDePasse=this.serviceUser.userAuthObject.userMotDePasse
  }

  updateUser(){

    this.serviceUser.update(this.serviceUser.userAuthObject.idUser,this.userInfo).subscribe(
      resp=>{
        this.serviceUser.userAuthObject=resp    
        alert("Modification réussie")
              
        this.ngOnInit(); 
      },error=>{
        console.error("compte inrouvable : ",error);
      }
    );
    
  }
}
