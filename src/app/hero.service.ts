import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {MessageService} from "./message.service";

// The @Injectable() decorator indicates that this service can be injected into another service.
@Injectable({
  // The providedIn property configures the NgModule that will inject this service into the root component.
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessage('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id:number) {
    const hero = HEROES.find(hero =>(hero.id  === id));
    //The backtick ( ` ) characters define a JavaScript template literal for embedding the id.
    this.messageService.addMessage(`HeroService: fetched hero with id ${id}`);
    // Like getHeroes(), getHero() has an asynchronous signature. It returns a mock hero as an Observable, using the RxJS of() function.
    return of (hero);
  }

}
