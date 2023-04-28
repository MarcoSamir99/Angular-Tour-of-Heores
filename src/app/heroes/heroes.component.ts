import { Component } from '@angular/core';
import { Hero } from './hero';
// import { HEROES } from '../mock-heroes'; no longer needed because we use it in service
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[] = [];      // we made this empty array because service will fill it auto
  selectedHero?: Hero;  

  constructor(private heroservice: HeroService, private messageService: MessageService) {} //injection

  ngOnInit(): void {     //this used to make getHeroes method excuted (lifecycle)
    this.getHeroes();
  }

  onSelected(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent Selected hero id=${hero.id}`);
  }
 
//used when we use 2 methods 2 get the data
  // //we made a method that return nothing(void) to call the hero service and assign its value to the present heroes value 
  // getHeroes(): void {
  //   this.heroes = this.heroservice.getHeroes()
  // }

//used when we use observable
  getHeroes(): void {
    this.heroservice.getHeroes()                   //we call the getHeores in the heroservice 
    .subscribe(heroes => this.heroes = heroes)          //subscribe used to take function as a parameter (which is came from the observable in hero service), so we send parameter with the name of heroes and the heroes which came from the class above (this.heroes) we assign it to the prev. made parameter
  }

}
