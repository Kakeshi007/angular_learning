import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field'
import { Todo } from '../../models/todo.mdel';
import { TodoService } from '../../service/todo.service';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-tablefromgrid',
  templateUrl: './tablefromgrid.component.html',
  styleUrls: ['./tablefromgrid.component.css']
})
export class TablefromgridComponent implements OnInit {
  todoLsit: Todo[] = [];
  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private todoService: TodoService) { }

  async ngOnInit() {
    this.todoLsit =  await this.getTodo();
    this.dataSource.data = this.todoLsit;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getTodo() {
    return this.todoService.getTodoList().toPromise().then((res: Todo[]) => {
      return res;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}




