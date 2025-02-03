import { Component } from '@angular/core';
import { HttpService } from './http.service'; // Correct import

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private httpService: HttpService) {} // Correct injection

  public send() {
    console.log("Sending file...");
    const inputNode: any = document.querySelector('input[type="file"]');
    const file = inputNode.files[0];
    const formData = new FormData();
    formData.append('upload', file);
    this.httpService.uploadFile(formData).subscribe((data) => {
      console.log(data);
    });
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }
}