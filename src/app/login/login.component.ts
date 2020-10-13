import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
templateUrl: 'login.component.html',
selector: 'login'
})
export class LoginComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {
displayChild: boolean=false;

  constructor() {
  console.log("LoginComponent:Constructor");
  }
  toggle() {
  this.displayChild=!this.displayChild;
  }

  ngOnChanges() {
  console.log("LoginComponent:OnChanges");
  }
  ngOnInit() {
  console.log("LoginComponent:OnInit");
  }
  ngDoCheck() {
  console.log("LoginComponent:DoCheck");
  }
  ngAfterContentInit() {
  console.log("LoginComponent:AfterContentInit");
  }
  ngAfterContentChecked() {
  console.log("LoginComponent:AfterContentChecked");
  }
  ngAfterViewInit() {
  console.log("LoginComponent:AfterViewInit");
  }
  ngAfterViewChecked() {
  console.log("LoginComponent:AfterViewChecked");
  }
  ngOnDestroy() {
  console.log("LoginComponent:OnDestroy");
  }
}

