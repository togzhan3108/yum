import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-list-mykitchen',
  templateUrl: './list-mykitchen.component.html',
  styleUrls: ['./list-mykitchen.component.css']
})
export class ListMykitchenComponent implements OnInit {

  Recipe: any = [];

    constructor(public restApi: RestApiService) { }

    ngOnInit() {
      this.loadRecipes();
    }

    loadRecipes() {
      return this.restApi.getRecipes().subscribe( data => this.Recipe = data);
    }

    deleteRecipe(id) {
      if (window.confirm('Are you sure you want to delete?')) {
        this.restApi.deleteRecipe(id)
          .subscribe(data => this.loadRecipes())
      }
    }


}
