import { Component, OnInit } from '@angular/core';

import {AuthService, User} from "@auth0/auth0-angular";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{

  user:User |null| undefined;
  email:any;
  role:any;
  constructor(public auth: AuthService) {
  }
  ngOnInit(): void {
      this.auth.user$.subscribe(user => 
        {
        this.user=user;
        this.email=this.user?.email;
        this.role=this.user?.['role'];
        console.log(this.email,this.role)
        sessionStorage.setItem('email',this.email)
        sessionStorage.setItem('role',this.role)

        });
        
      console.log(sessionStorage.getItem('email'), sessionStorage.getItem('role'))
      
  }
  


}
