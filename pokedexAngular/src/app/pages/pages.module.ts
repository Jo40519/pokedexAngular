import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutingModule
  ],
  declarations: [
    PagesComponent,
    HomeComponent
  ]
})
export class PagesModule { }
