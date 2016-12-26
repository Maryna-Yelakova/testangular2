import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule }   from './app-routing.module';

import { AppComponent }  from './app.component';
import { TigerComponent } from './tiger.component';
import { KittyComponent } from './kitty.component';


@NgModule({
    imports:      [
        BrowserModule,
        AppRoutingModule

    ],

    declarations: [
        AppComponent,
        TigerComponent,
        KittyComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
