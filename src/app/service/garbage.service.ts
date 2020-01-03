import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GarbageService {
  private url = 'http://localhost:3000/bank/';

  constructor(private http: HttpClient) { }

  getBank() {
    return this.http.get(this.url);
  }

}
