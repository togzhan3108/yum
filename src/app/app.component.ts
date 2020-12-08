import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { DataService } from "./services/data.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
// Built-in pipes: UpperCasePipe and DatePipe
  title: String
  toDate: Date = new Date();

  constructor(private mainTitle: DataService) {
  this.title = this.mainTitle.getTitle()
  }
}
