import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details',
    component:
    DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
export class RoutingModule { }
