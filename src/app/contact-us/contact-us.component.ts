import { Component, OnInit } from '@angular/core';
import { User } from './../interface/signup.interface'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  user: FormGroup;

  constructor(
      private fb: FormBuilder
  ) { }

  ngOnInit() {
      this.user = this.fb.group({
          name: ['', [Validators.required, Validators.minLength(2)]],
          account: this.fb.group({
              email: ['', Validators.required],
              confirm: ['', Validators.required]
          })
      });
  }

}
