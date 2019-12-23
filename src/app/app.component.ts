import { Component } from '@angular/core';
import { TestserviceService } from './testservice.service';
import { from } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProject';
  testif = 'Boruto';
  namevalue: string;
  name: string;
  testservice: TestserviceService;
  books = [
    {name : 'one piece'},
    {name : 'naruto'},
    {name : 'days'}
  ];

  constructor(private testSW: TestserviceService, private router:Router) {
    this.testservice = testSW;
  }

  setname(name) {
    this.namevalue = name;
    this.testservice.hellog();
  }

  gotoTable(){
    this.router.navigate(['table']);
  }

  gotoAbout(){
    this.router.navigate(['aboutus']);
    // this.router.navigate(['show',{first:data.first,last:data.last}])
  }
}
