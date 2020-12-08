import { Component } from '@angular/core';
import { ComponentCanDeactivate } from '../guards/contact-guard';
import { Observable } from "rxjs"
import { NgForm } from '@angular/forms';

@Component({
templateUrl: 'contact.component.html',
selector: 'contact',
styles: ['input.ng-touched.ng-invalid { border:solid red 2px; } input.ng-touched.ng-valid { border:solid green 2px; }']
})
export class ContactComponent implements ComponentCanDeactivate{

saved: boolean = false;
    save(){
        this.saved = true;
    }

    canDeactivate() : boolean | Observable<boolean>{

        if(!this.saved){
            return confirm("You want to leave the page without saving the data?");
        }
        else{
            return true;
        }
    }

    firstname: string;
    email: string;
    subject: string;
    message: string;

     onSubmit(form : NgForm){
     console.log(form);
     }
}
