import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { LogService } from "../services/log.service";
import { NgForm } from '@angular/forms';

@Component({
templateUrl: 'login.component.html',
selector: 'login',
styles: ['input.ng-touched.ng-invalid { border:solid red 2px; } input.ng-touched.ng-valid { border:solid green 2px; }']
})
export class LoginComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {
displayChild: boolean=false;

  constructor(private logger: LogService) {
  console.log("LoginComponent:Constructor");
  }
  testLog(): void {
  this.logger.log("Test the `log()` Method");
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

   email: string;
   password: string;

   onSubmit(form : NgForm){
   console.log(form);
   }
}

