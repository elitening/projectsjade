import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {
  }
  public num1: number;
  public num2: number;
  public operatorN: string;
  public result: number;
  public display: string = "";
  public processedN: number;
 
  insertNum(num){
    if (!this.display.includes('.')){
        if (this.display!=""){
          if (this.display.length<=9){
          this.display = (this.display + num +"");
        }
          if (this.display.includes('+')){
              this.operatorN = '+';
              this.display = this.display.substr(0, this.display.length-1);
              this.num1 = parseInt(this.display);
              this.display = "";
           // this.display = this.num1 + "";
          }
        }else {
          this.display = num + "";
      }
    } 
  }

  myEquals(){
      this.num2 = parseInt(this.display);
      this.processedN = this.num1 + this.num2;
      this.display = this.processedN + "";
  }

   checkDec(el){
    var ex = /^[0-9]+\.?[0-9]*$/;
    if(ex.test(el.value)==false){
        alert('Incorrect Number');
    }
}

  add(){
    this.result = this.num1+this.num2;
  }
  subtraction(){
    this.result = this.num1-this.num2;
  }
  multiplication(){
    this.result = this.num1*this.num2;
  }
  division(){
    this.result = this.num1/this.num2;
  }
  clearM(){
    this.display = "";
  }
  backS(){
    this.display = this.display.substr(0, this.display.length-1);
  }
}
