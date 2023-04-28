import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';  //importing components for routing
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //pathmatch used to get all the url excatly as ordered not partially
  {path: 'heroes', component: HeroesComponent }, //we will make the path of 'heroes' direct us to the HeroCOmponent
  {path: 'dashboard', component: DashboardComponent },
  {path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
