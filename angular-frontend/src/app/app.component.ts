import { Component } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [SideBarComponent]
})
export class AppComponent {
  
}