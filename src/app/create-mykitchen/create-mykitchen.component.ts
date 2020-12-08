import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-mykitchen',
  templateUrl: './create-mykitchen.component.html',
  styleUrls: ['./create-mykitchen.component.css']
})
export class CreateMykitchenComponent implements OnInit {

  @Input() recipeDetails = { name: "", method: "" }

    constructor(public restApi: RestApiService, public router: Router) { }

    ngOnInit() {
    }

    onSubmit(){
    this.restApi.createRecipe(this.recipeDetails)
          .subscribe((data: {}) => {
            this.router.navigate(['/list-mykitchen'])
          })
    }
}
