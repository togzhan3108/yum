import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
  `
  .clr {
  color: #d99f0d;
  }
  `
  ]
})
export class AppComponent {
  // Built-in pipes: UpperCasePipe and DatePipe
  title: string = "yum";
  toDate: Date = new Date();
}
