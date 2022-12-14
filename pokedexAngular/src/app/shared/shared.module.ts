import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from '../pages/details/details.component';



@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
  ],
exports: [
  PokeHeaderComponent,
  PokeSearchComponent,
  PokeListComponent
],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SharedModule { }
