import { Component, OnInit } from '@angular/core';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-client',
  templateUrl: './contact-client.component.html',
  styleUrls: ['./contact-client.component.css'],
})
export class ContactClientComponent implements OnInit {
  infos_contact = {
    nomComplet: '',
    email: '',
    telephone: '',
    message: '',
  };
  nomvide: boolean = false;
  emailvide: boolean = false;
  phonevide: boolean = false;
  messagevide: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  email_envoye() {

    this.nomvide = this.infos_contact.nomComplet === '';
    this.emailvide = this.infos_contact.email === '';
    this.phonevide = this.infos_contact.telephone === '';
    this.messagevide = this.infos_contact.message === '';
    if (this.nomvide || this.emailvide || this.phonevide || this.messagevide)
      {    alert('veuillez remplir tous les champs');

      return;
  }
    else {


      emailjs.init('5Cdo64WAYgN0Y1m7k');
      emailjs.send('service_q53eiyq', 'template_7kwbhme', {
        from_name: this.infos_contact.nomComplet,
        to_email: this.infos_contact.email,
        from_phone: this.infos_contact.telephone,
        message: this.infos_contact.message,
      });
      alert('Message envoyé');
      this.infos_contact.nomComplet = '';
      this.infos_contact.email = '';
      this.infos_contact.telephone = '';
      this.infos_contact.message = '';
    }
  }
}
