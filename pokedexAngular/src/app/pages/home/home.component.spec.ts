/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { PokeListComponent } from 'src/app/shared/poke-list/poke-list.component';
import { PokeHeaderComponent } from 'src/app/shared/poke-header/poke-header.component';
import { PokeSearchComponent } from 'src/app/shared/poke-search/poke-search.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeApiService } from 'src/app/service/poke-api.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent, PokeListComponent, PokeHeaderComponent, PokeSearchComponent ],
      providers: [PokeApiService],
      imports:[HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
