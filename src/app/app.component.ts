import { Component, Input } from '@angular/core';
import RobotsJson from "./../../robots.json";


export interface ROBOTS {
  id: number,
  img: string,
  name: string,
  username: string,
  email: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'robofriends-angular';
  filterTerm!: string;


  Robots: ROBOTS[] = RobotsJson


}





