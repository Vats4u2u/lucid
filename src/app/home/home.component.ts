import { Component } from '@angular/core';

declare function parallax():any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'


})
export class HomeComponent {

  ngOnInit(){
    parallax();
  }
}
