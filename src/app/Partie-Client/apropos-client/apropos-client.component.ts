import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/Services/pets.service';

@Component({
  selector: 'app-apropos-client',
  templateUrl: './apropos-client.component.html',
  styleUrls: ['./apropos-client.component.css']
})
export class AproposClientComponent implements OnInit {

  constructor(private pets_service:  PetsService) { }

  ngOnInit(): void {

    
  }


}
