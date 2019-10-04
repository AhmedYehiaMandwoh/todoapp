import { Component, OnInit } from '@angular/core';
import { NgFlashMessageService } from 'ng-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  todos;

  constructor( private authService: AuthService ,private FlashMessage: NgFlashMessageService,
    private router: Router,private TodoSer: TodosService) { }
 currentUser = this.authService.getCurrentUser();

  ngOnInit() {
   this.getAllTodos();
  }
  getAllTodos() {
    const currentUser = this.authService.getCurrentUser();
    if(currentUser) {
      const query = {owner: currentUser.id};
    this.TodoSer.getTodos(query).subscribe(data => {
      this.todos = data as any
    })
    }else {
      this.FlashMessage.showFlashMessage({messages: ['Deleted Successfully'], dismissible: true, timeout: 2000, type: 'success'})
    }
  }
  deleteTask(taskId){
      this.TodoSer.deleteTodo(taskId).subscribe(data => {
        if((data as any).success) {
          this.FlashMessage.showFlashMessage({messages: ['Deleted Successfully'], dismissible: true, timeout: 2000, type: 'success'})
          window.location.reload();
        } else {
          console.log('error')
        }
      })
  } 

}
