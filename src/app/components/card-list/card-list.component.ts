import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  robots: {id: number, name:string, username: string, email: string} ;

  constructor() { }

  ngOnInit(): void {
  }

}
