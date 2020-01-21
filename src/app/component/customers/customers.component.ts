import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
import { CustomerModel } from '../../models/customers.model';
import { GarbageService } from '../../service/garbage.service';
import { MatSort } from '@angular/material';
import { MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {SelectionModel} from '@angular/cdk/collections';


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
  selection: any;

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
    this.selection = new SelectionModel<CustomerModel>(true, []);
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

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: CustomerModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }


}
