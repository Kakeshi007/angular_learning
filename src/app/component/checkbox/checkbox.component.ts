import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { Bank } from '../../models/bank.model';
import { GarbageService } from 'src/app/service/garbage.service';

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  displayedColumns: string[] = ['id', 'bankname', 'bank_img'];
  dataSource: any;
  selection: any;
  bankList: Bank[] = [];

  constructor(private bankService: GarbageService) {}

  async ngOnInit() {
    this.bankList =  await this.getBank();
    this.dataSource = new MatTableDataSource<Bank>(this.bankList);
    this.selection = new SelectionModel<Bank>(true, this.bankList);
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
  checkboxLabel(row?: Bank): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  getBank() {
    return this.bankService.getBank().toPromise().then(res => {
      return res['rs'];
    });
  }
}
