import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field'
import { CustomerModel } from '../../models/customers.model';
import { GarbageService } from '../../service/garbage.service';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerList: CustomerModel[] = [];
  displayedColumns: string[] = ['id', 'company', 'taxnumber', 'changwat'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private customerService: GarbageService) { }

  async ngOnInit() {
    this.customerList =  await this.getCustomer();
    this.dataSource.data = this.customerList;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getCustomer() {
    return this.customerService.getCustomer().toPromise().then((res: CustomerModel[]) => {
      return  res;
    });
  }

}
