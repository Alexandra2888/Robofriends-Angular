import { Component, OnInit } from '@angular/core';
import { RobotsService } from "../../robots.service";



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent implements OnInit {
  robots: {id: string, name: string, username: string, email: string};
  link: any = 'https://robohash.org/${id}?size=200x200';

  constructor(private robotsService: RobotsService) {
  }

  ngOnInit() {
    this.robotsService.getRobots().subscribe(value => {
      return value
    })
  }
}


