import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageservice: MessageService) { }
//  getHeroes is a method to return the data from file mock-heroes , return array of type Hero
  getHeroes(): Observable<Hero[]> {                    //observable(template) used to wait the server to respond with the data requested, i have to specify the data to be sent in the template
    const heroes = of(HEROES)                       //simulation to respond with array of heroes from mock heroes, of used to return observable
    this.messageservice.add('HeroService: fetched heroes');
    return heroes;                                 
       
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageservice.add(`HeroService fetched hero id=${id}`);
    return of(hero);
  }

}
