import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from "./guards/user-guard.service";
import { ExitContactGuard } from "./guards/contact-guard";
import { AdminGuardService } from "./guards/admin-guard.service";
import { NgModule } from '@angular/core';

import { HomeComponent } from './home';
import { RecipesComponent } from './recipes';
import { MykitchenComponent } from './mykitchen';
import { ContactComponent } from './contact';
import { LoginComponent } from './login';
import { AdminComponent } from './admin';

import { EditMykitchenComponent } from './edit-mykitchen/edit-mykitchen.component';
import { CreateMykitchenComponent } from './create-mykitchen/create-mykitchen.component';
import { ListMykitchenComponent } from './list-mykitchen/list-mykitchen.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'mykitchen', component: MykitchenComponent, canActivate: [UserGuard] },
    { path: 'contact', component: ContactComponent, canDeactivate: [ExitContactGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuardService] },
    { path: 'create-mykitchen', component: CreateMykitchenComponent },
    { path: 'edit-mykitchen/:id', component: EditMykitchenComponent },
    { path: 'list-mykitchen', component: ListMykitchenComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
