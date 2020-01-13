import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field'
import { CustomerModel } from '../../models/customers.model';
import { GarbageService } from '../../service/garbage.service';
import { MatSort } from '@angular/material';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customerList: CustomerModel[] = [];
  displayedColumns: string[] = ['id', 'company', 'taxnumber', 'changwat', 'delete'];
  faTrash = faTrash;
  dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private customerService: GarbageService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
   }

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

  delete(id){
    if(confirm('Are you sure to delete ' + id)) {
      return this.customerService.delete(id);
    }
  }

}
