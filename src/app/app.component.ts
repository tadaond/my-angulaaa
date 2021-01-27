import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <app-navbar></app-navbar>

    <router-outlet></router-outlet>

    <app-footer></app-footer>
  `

})
export class AppComponent {
  
}
