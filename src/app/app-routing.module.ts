import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './character/character.component';
import { EpisodeComponent } from './episode/episode.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  { path: 'character', component: CharacterComponent},
  { path: 'episode', component: EpisodeComponent},
  { path: 'location', component: LocationComponent},
  { path: '', redirectTo: '/character', pathMatch: 'full' },
] ;


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
