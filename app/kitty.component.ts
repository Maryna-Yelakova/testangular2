import { Component } from '@angular/core';

@Component({
  selector:'kitty',
  template:`
  <h1>Sashka is {{name}} </h1>
  `
})
export class KittyComponent {
  name = "Kitty"
}

