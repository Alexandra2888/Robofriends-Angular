import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Robots } from "./models/robots";
@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  constructor(private http: HttpClient) { }

  public getRobots(): Observable<Robots> {
    return this.http.get<Robots>("https://jsonplaceholder.typicode.com/users/")
  }
}
