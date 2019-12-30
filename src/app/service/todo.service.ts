import { Injectable } from '@angular/core';
import {  HttpClient,  HttpResponse } from '@angular/common/http';
import { Todo } from '../models/todo.mdel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }


  getTodoList() {
    return this.http.get(this.url);
  }
 
}
