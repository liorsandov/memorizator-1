import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
//button console.log//
  buttonCliced1(){
    console.log("User Press on button number: 1")
  }
  buttonCliced2(){
    console.log("User Press on button number: 2")
  }
  buttonCliced3(){
    console.log("User Press on button number: 3")
  }
  buttonCliced4(){
    console.log("User Press on button number: 4")
  } 
  buttonCliced5(){
    console.log("User Press on button line: 4 number: 4")
  } 


}
