import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from "../hero.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  //The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL. The "id" parameter is the id of the hero to display.
  //
  // The HeroService gets hero data from the remote server and this component uses it to get the hero-to-display.
  //
  // The location is an Angular service for interacting with the browser. This service lets you navigate back to the previous view.
  constructor(private heroService: HeroService, private location: Location, private activatedRoute: ActivatedRoute) {
  }

  hero?: Hero;

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero  = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
