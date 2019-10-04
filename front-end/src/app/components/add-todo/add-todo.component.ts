import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  name: String;
  done: Boolean;
  owner: String;
  constructor( private router: Router,
               private FlashMessage: NgFlashMessageService,
               private authService: AuthService,
               private TodosSer: TodosService) { }

  ngOnInit() {
    const user = this.authService.getCurrentUser();
    this.owner = user.id;
    this.done = false;

  }

  onAddTodo() {
    if(!this.name){
      this.FlashMessage.showFlashMessage({messages: ['Todo Name Is Required'], dismissible: true, timeout: 2000, type: 'danger'})
    } else {
      const todo = {
        name: this.name,
        owner: this.owner,
        done: this.done
      }
         this.TodosSer.addTodo(todo).subscribe(data => {
           console.log(data as any)
          this.FlashMessage.showFlashMessage({messages: ['Added Successfully '], dismissible: true, timeout: 2000, type: 'true'})
          this.router.navigate(['/']);
        });

    }
  }
}
