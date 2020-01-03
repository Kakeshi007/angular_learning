import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Bank } from '../../models/bank.model';
import { GarbageService } from '../../service/garbage.service';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {
  bankList: Bank[] = [];
  displayedColumns: string[] = ['id', 'bankname', 'bank_img'];
  dataSource = new MatTableDataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private bankService: GarbageService) { }

  async ngOnInit() {
    this.bankList =  await this.getBank();
    this.dataSource.data = this.bankList;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getBank() {
    return this.bankService.getBank().toPromise().then(res => {
      return res['rs'];
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}




