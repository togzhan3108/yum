import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-mykitchen',
  templateUrl: './edit-mykitchen.component.html',
  styleUrls: ['./edit-mykitchen.component.css']
})
export class EditMykitchenComponent implements OnInit {

 id = this.actRoute.snapshot.params['id'];
   recipeData: any = {};

   constructor(
     public restApi: RestApiService,
     public actRoute: ActivatedRoute,
     public router: Router
     ) { }

   ngOnInit() {
     this.restApi.getRecipe(this.id.toString())
       .subscribe(data => this.recipeData = data);
   }

   onSubmit() {
     if(window.confirm('Are you sure you want to update?')) {
       this.restApi.updateRecipe(this.id, this.recipeData)
         .subscribe(data => {
           this.router.navigate(['/list-mykitchen'])
         })
     }
   }

}
