import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as AppUtil from '../components/common/App.util';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }
 // Add New Todo
  addTodo(todo) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN)
    console.log(token);
    let headers = new HttpHeaders().append('Authorization', token);
    return this.http.post('todos/add', todo, {headers})

  }
// Get All Todos
  getTodos(query) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN)
    let headers = new HttpHeaders().append('Authorization', token);
    return this.http.post('todos/list', query, {headers})
  }


  deleteTodo(taskId) {
    const token = localStorage.getItem(AppUtil.AUTH_TOKEN)
    let headers = new HttpHeaders().append('Authorization', token);
    return this.http.delete(`todos/remove/${taskId}`, {headers})
    
  }




}
