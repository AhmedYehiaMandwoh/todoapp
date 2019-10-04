import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';

const routes: Routes = [ 
  {path: '', component: HomeComponent},
  {path: 'addTodo', component: AddTodoComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
