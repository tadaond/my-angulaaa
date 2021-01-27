import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template:
  ` 
  <div class="navbar">
    <a href="" class="nav-item" routerLink="/">Home</a> | 
    <a href="" class="nav-item" routerLink="/radio">Radio</a> | 
    <a href="" class="nav-item" routerLink="/calculator">Calculator</a> | 
    <a href="" class="nav-item" routerLink="/todo">TODOs</a>
  </div>

  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
