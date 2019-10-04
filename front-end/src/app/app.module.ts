import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ValidateService } from './services/validate.service';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { AuthService } from './services/auth.service';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodosService } from './services/todos.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    NgFlashMessagesModule
  ],
  providers: [ValidateService, AuthService, TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
