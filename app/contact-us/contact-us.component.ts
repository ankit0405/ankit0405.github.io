import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms'
import { User } from './user';
declare var $:any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactUsForm : FormGroup;
  

  private user:User;
  constructor() { }

  ngOnInit() {
    this.contactUsForm = new FormGroup({
      name : new FormControl('',Validators.required),
      email : new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      contact : new FormControl('', Validators.required),
      desc : new FormControl('', Validators.required),
    })
  }

  submitDetails($event){
  }

}
