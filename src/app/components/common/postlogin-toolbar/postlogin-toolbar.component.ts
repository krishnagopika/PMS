import {Component} from '@angular/core';
import {AuthService, User} from "@auth0/auth0-angular";

@Component({
  selector: 'app-postlogin-toolbar',
  templateUrl: './postlogin-toolbar.component.html',
  styleUrls: ['./postlogin-toolbar.component.css']
})
export class PostloginToolbarComponent {
  user:User |null| undefined;
  email:any;
  role:any;
 
    
    constructor(public auth: AuthService) {

     }
      ngOnInit(): void {
         this.auth.user$.subscribe(user =>
          { this.user=user;
            this.email=this.user?.email;
             this.role=this.user?.['role'];
              console.log(this.email,this.role)
               sessionStorage.setItem('email',this.email)
                sessionStorage.setItem('role',this.role)});
                console.log(sessionStorage.getItem('email'), sessionStorage.getItem('role'))
               }

}
