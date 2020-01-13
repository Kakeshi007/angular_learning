import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomerModel} from '../models/customers.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GarbageService {
  private url = 'http://localhost:3000';
  private  serializedForm: any;
 

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

  updateCustomer(id, data) {
    this.serializedForm = JSON.stringify(data);
  
    return this.http.put(this.url + '/customer/' + id, this.serializedForm, httpOptions)
            .subscribe(
                data => console.log('success!', data),
                error => console.error('couldn\'t post because', error)
            );
  }

  delete(id){
    return this.http.delete(this.url + '/customer/' + id, httpOptions).subscribe(
      data => console.log('success!', data),
      error => console.error('couldn\'t post because', error)
    );
  }

  addCustomer(data){
    this.serializedForm = JSON.stringify(data);
    return this.http.post(this.url + '/customer/', this.serializedForm, httpOptions).subscribe(
      data => console.log('success!', data),
      error => console.error('couldn\'t post because', error)
    );
  }

}
