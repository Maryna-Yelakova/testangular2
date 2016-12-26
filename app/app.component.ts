import { Component } from '@angular/core';


@Component({
    selector:'my-app',
    template:`
    <div>
    <h1>{{title}}</h1>
    </div>
    <nav>
      <a routerLink="/kitty">Kitty</a>
      <a routerLink="/tiger">Tiger</a>
      <router-outlet></router-outlet>
    </nav>
    `
})
export class AppComponent {
    title= 'My kids!'
}
