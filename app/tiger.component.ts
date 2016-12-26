import { Component } from '@angular/core';

@Component({
  selector:'tiger',
  template:`
  <h1>Jeka is {{name}}</h1>
  `
})
export class TigerComponent {
  name = "Tiger"
}
