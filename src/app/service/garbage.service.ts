import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerModel} from '../models/customers.model';

@Injectable({
  providedIn: 'root'
})
export class GarbageService {
  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBank() {
    return this.http.get(this.url + '/bank/' );
  }

  getBankByID(id) {
    return this.http.get(this.url + '/bank/' + id);
  }

  getCustomer() {
    return this.http.get(this.url + '/customers/');
  }

  updateCustomer(id, data: CustomerModel) {
    return this.http.put(this.url + '/customers/' + id, data);
  }

}
