import { Component } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-prelogin-toolbar',
  templateUrl: './prelogin-toolbar.component.html',
  styleUrls: ['./prelogin-toolbar.component.css']
})
export class PreloginToolbarComponent {

  constructor(public auth: AuthService) {
    
  }
}
