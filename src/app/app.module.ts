import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { RecipesComponent } from './recipes';
import { MykitchenComponent } from './mykitchen';
import { ContactComponent } from './contact';
import { LoginComponent } from './login';
import { AdminComponent } from './admin';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { WhyusComponent } from './why-us/why-us.component';
import { SpecialsComponent } from './specials/specials.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogService } from "./services/log.service";
import { DataService } from "./services/data.service";
import { UserGuard } from "./guards/user-guard.service";
import { ExitContactGuard } from "./guards/contact-guard";
import { AdminGuardService } from "./guards/admin-guard.service";
import { EditMykitchenComponent } from './edit-mykitchen/edit-mykitchen.component';
import { CreateMykitchenComponent } from './create-mykitchen/create-mykitchen.component';
import { ListMykitchenComponent } from './list-mykitchen/list-mykitchen.component';

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
    AdminComponent,
    EditMykitchenComponent,
    CreateMykitchenComponent,
    ListMykitchenComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
  LogService,
  DataService,
  UserGuard,
  ExitContactGuard,
  AdminGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
