import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../models/todo.mdel';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  // library
  private address: {
    street: string,
    city: string,
    province: string
  };

  // array
  private skills: string[];
 
  // service
  private todoLsit: Todo[] = [];

  private isEdit: boolean;

  constructor(private todoService: TodoService) { }

  ngOnInit() {

    this.address = {
      street: '341',
      city: 'mittapap',
      province: 'lampang'
    };

    this.skills = [
      'php',
      'web',
      'js'
    ];

    // call service
    this.todoService.getTodoList().subscribe((res: any[]) => {
        this.todoLsit = res;
    });
  }

  addskill(skill) {
    this.skills.unshift(skill); // add array
    return false;
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element === skill) {
          this.skills.splice(index, 1); // delete array
      }
    });
  }

  hide() {
    this.isEdit = !this.isEdit;
  }
}


