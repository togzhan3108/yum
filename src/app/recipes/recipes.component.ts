import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
@Component({
templateUrl: 'recipes.component.html',
selector: 'recipes'
})

export class RecipesComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {
displayChild: boolean=false;
title: string = "Why choose "

  constructor() {
  console.log("RecipesComponent:Constructor");
  }
  toggle() {
  this.displayChild=!this.displayChild;
  }

  ngOnChanges() {
  console.log("RecipesComponent:OnChanges");
  }
  ngOnInit() {
  console.log("RecipesComponent:OnInit");
  }
  ngDoCheck() {
  console.log("RecipesComponent:DoCheck");
  }
  ngAfterContentInit() {
  console.log("RecipesComponent:AfterContentInit");
  }
  ngAfterContentChecked() {
  console.log("RecipesComponent:AfterContentChecked");
  }
  ngAfterViewInit() {
  console.log("RecipesComponent:AfterViewInit");
  }
  ngAfterViewChecked() {
  console.log("RecipesComponent:AfterViewChecked");
  }
  ngOnDestroy() {
  console.log("RecipesComponent:OnDestroy");
  }
}
