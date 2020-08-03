import { Component, OnInit } from '@angular/core';
import {Contact} from './contact';
import{ContactService} from './contactService';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:Contact;
  contacts:Contact[];

  constructor(private contactService:ContactService) 
  { 
    this.contact=new Contact();
    this.contacts=this.contactService.getContacts();
  }

  ngOnInit(): void {
  }

}
