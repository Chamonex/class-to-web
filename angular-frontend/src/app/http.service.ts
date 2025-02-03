import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient) { }

  uploadFile(formData: FormData) {
    return this.http.post('http://localhost:3000', formData);
  }

  testing() {
    return this.http.get('http://localhost:3000');
  }
}
