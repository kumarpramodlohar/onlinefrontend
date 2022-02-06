import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

import {Login} from '../dto/login';

import { LoginApiService } from '../login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logins: Login[];
  

  constructor(private router: Router,  private loginApiService: LoginApiService ) { }

  ngOnInit(): void {
  }

  getLogin(): void {
   // pending work 
  
  }

  getTest() {
    this.loginApiService.getTest().subscribe(data => {
     // this.test = data;
      console.log(data);
    });
  }

}
