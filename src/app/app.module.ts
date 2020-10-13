import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { RecipesComponent } from './recipes';
import { MykitchenComponent } from './mykitchen';
import { ContactComponent } from './contact';
import { LoginComponent } from './login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WhyusComponent } from './why-us/why-us.component';
import { SpecialsComponent } from './specials/specials.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    MykitchenComponent,
    ContactComponent,
    LoginComponent,
    WhyusComponent,
    SpecialsComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
