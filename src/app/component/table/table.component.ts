import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../models/todo.mdel';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  private todoLsit: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
     // call service
    this.todoService.getTodoList().subscribe((res: any[]) => {
      this.todoLsit = res;
    });
  }

}
