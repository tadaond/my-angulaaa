import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template:
  `
  <div class="calculator">
    <h1>Calculator</h1>
    <img src="/assets/calculator-bg.png">
    <div class="inputs">
      <input class="input" type="number" placeholder="number 1" name="num1" [(ngModel)] = "num1">
      <input class="input" type="number" placeholder="number 2" name="num2" [(ngModel)] = "num2"> <br>
    </div>

    <div class="buttons">
      <button class="button" (click)="add()">Add</button>
      <button class="button" (click)="deduct()">Deduct</button>
      <button class="button" (click)="multiply()">Multiply</button>
      <button class="button" (click)="divide()">Divide</button>
    </div>

    <div class="answer">
      <input class="ans-input" type="number" placeholder={{num3}} disabled>
    </div>

  </div>
  `,
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  public num1:number;
  public num2:number;
  public num3:number;

  add()
  {
    this.num3 = this.num1 + this.num2;
  }

  deduct()
  {
    this.num3 = this.num1 - this.num2;
  }

  multiply()
  {
    this.num3 = this.num1 * this.num2;
  }
  divide()
  {
    this.num3 = this.num1 / this.num2;
  }


  ngOnInit(): void {
  }

}
