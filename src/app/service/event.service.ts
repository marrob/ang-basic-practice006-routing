//event.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Event} from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private list: Event[] = [
    {name:'Bp', date:'2021.02.11', time:'08:08', location:{ address:'fehervari ut', city:'budapest', country:'hungary' }},
    {name:'Balaton', date:'2021.03.11', time:'08:08', location:{ address:'Kosuth ut', city:'Balaton', country:'hungary' }},
    {name:'Miskolc', date:'2021.04.11', time:'08:08', location:{ address:'Rákoczi ut', city:'Balaton', country:'hungary' }},
  ];
  //Ha valaki szeretné a lista tartalmát akkor fel kell iratkoznia az async pipe-al
  list$:BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);
   /*=new BehaviorSubject<Event[]>(this.list);*/
  constructor() { }

  getAll():BehaviorSubject<Event[]>{
    this.list$.next(this.list);
    return this.list$;
  }
}
