import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './pages-routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
    DetailsComponent
  ]
})
export class PagesModule { }
