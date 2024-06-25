import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-menu-client',
  templateUrl: './menu-client.component.html',
  styleUrls: ['./menu-client.component.css']
})
export class MenuClientComponent implements OnInit {

  constructor(public serviceUser:UserService , private router:Router) { }


  ngOnInit(): void {

    
  }

  logout(){
    this.serviceUser.userAuthObject=null;
    this.serviceUser.lienAchat=null;
    this.router.navigate(['/client/sidentifier-client']); 
  }

  goToCard(){
    this.serviceUser.lienAchat=null;
    if(this.serviceUser.userAuthObject==null){
      this.router.navigate(['/client/sidentifier-client']); 
    }else{
      this.router.navigate(['/client/card-client']); 
    }
  }

}

document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('#navbar');

    if (mobileNavToggle && navbar) {
        mobileNavToggle.addEventListener('click', function(this: HTMLElement, e: Event) {
            navbar.classList.toggle('navbar-mobile');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });
    }
});
