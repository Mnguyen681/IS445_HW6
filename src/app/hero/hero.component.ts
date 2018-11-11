import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  Hero = {
    id: 1,
    name: 'Windstorm'
  }
  constructor() { }

  ngOnInit() {
  }

}
