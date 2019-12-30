import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Todo } from '../../models/todo.mdel';
import { TodoService } from '../../service/todo.service';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-tablefromgrid',
  templateUrl: './tablefromgrid.component.html',
  styleUrls: ['./tablefromgrid.component.css']
})
export class TablefromgridComponent implements OnInit {
  todoLsit: Todo[] = [];
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource = new MatTableDataSource<Todo>(this.todoLsit);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private todoService: TodoService) { }

  async ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.todoLsit =  await this.getTodo();
    console.log(this.todoLsit);
    console.log(1);
  }

   getTodo() {
     return this.todoService.getTodoList().toPromise().then((res: Todo[]) => {
       return res;
    });
    
    
  }

}




