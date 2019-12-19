import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

  }

  addskill(skill){
    this.skills.unshift(skill); // add array
    return false;
  }

  removeSkill(skill){
    this.skills.forEach((element, index) => {
      if(element == skill) {
          this.skills.splice(index, 1); // delete array
      }
    });
  }

}
