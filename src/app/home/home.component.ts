import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: 
  `
  <div class="home">
    <img src="/assets/home-bg.png">
    <div class="home-text">
      <h1>Welcome to my absolutely random app!</h1>
      <p>Browse the app using navigation bar at the top of the page.<p>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
