import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`
  <div class="footer">
    <p>
    Do not mind this spot - using it to add up component number. Web application made by Algirdas Vendelis as KGSP class homework-project. <br>
    <strong>P.S. Honesty is the best policy :-) </strong></p>  
  </div>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
