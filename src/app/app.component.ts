import { Component } from '@angular/core';
import data from "../../robots.json";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'robofriends-angular';
  Robots: any = data;
}
