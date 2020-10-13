import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { RecipesComponent } from './recipes';
import { MykitchenComponent } from './mykitchen';
import { ContactComponent } from './contact';
import { LoginComponent } from './login';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'mykitchen', component: MykitchenComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
