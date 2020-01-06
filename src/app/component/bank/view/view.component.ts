import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GarbageService } from '../../../service/garbage.service';
import { Bank } from '../../../models/bank.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  private bankId: number;
  bankDetail: Bank[] = [];

  constructor(private route: ActivatedRoute, private garbageservice: GarbageService) { }

  async ngOnInit() {
    this.bankId = +this.route.snapshot.paramMap.get('id');
    this.bankDetail = await this.getBankById(this.bankId);
    console.log(this.bankDetail);
  }

  getBankById(id) {
    return this.garbageservice.getBankByID(id).toPromise().then(res => {
      return res['rs'];
    });
  }

}
