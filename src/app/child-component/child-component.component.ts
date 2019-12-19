import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  @Output() inputValueFromChild: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  emitValue(value){
      this.inputValueFromChild.emit(value);
  }

}
