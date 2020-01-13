import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { GarbageService } from '../../service/garbage.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
   private id: string;
   private result: any;
   private formObj: any;
  // private company: string;
  formGroupUpdate = new FormGroup({
    company: new FormControl(''),
    address: new FormControl(''),
  });

  formGroupAdd = new FormGroup({
    company: new FormControl(''),
    address: new FormControl(''),
  });

  constructor(private customer: GarbageService, private rout: ActivatedRoute) { }

  ngOnInit() {
     this.id = this.rout.snapshot.paramMap.get('id');
    // this.company = this.rout.snapshot.paramMap.get('company');
  }

  async onSubmit() {
    // TODO: Use EventEmitter with form value3
    this.formObj = this.formGroupUpdate.getRawValue();
    this.result = await this.customer.updateCustomer(this.id, this.formObj);
    //console.warn(this.result);
  }

  async onAdd() {
    // TODO: Use EventEmitter with form value3
    this.formObj = this.formGroupAdd.getRawValue();
    // console.log(this.formObj);
    this.result = await this.customer.addCustomer(this.formObj);
    console.log(this.result);
  }
 
}
