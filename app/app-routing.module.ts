import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TigerComponent }   from './tiger.component';
import { KittyComponent }      from './kitty.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/tiger',
    pathMatch: 'full'
  },
  {
    path: 'tiger',
    component: TigerComponent
  },
  {
    path: 'kitty',
    component: KittyComponent
  }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
