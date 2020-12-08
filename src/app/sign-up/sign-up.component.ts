import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
templateUrl: 'sign-up.component.html',
selector: 'sign-up',
styles: ['input.ng-touched.ng-invalid { border:solid red 2px; } input.ng-touched.ng-valid { border:solid green 2px; }']
})

export class SignUpComponent {
 firstname: string;
 lastname: string;
 email: string;
 password: string;

 onSubmit(form : NgForm){
 console.log(form);
 }
}
