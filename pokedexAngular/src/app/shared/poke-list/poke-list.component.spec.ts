import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokeApiService } from 'src/app/service/poke-api.service';

import { PokeListComponent } from './poke-list.component';

describe('PokeListComponent', () => {
  let component: PokeListComponent;
  let fixture: ComponentFixture<PokeListComponent>;
  let pokeApiSerice: jasmine.SpyObj<PokeApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeListComponent ],
      providers: [ PokeApiService ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeListComponent);
    component = fixture.componentInstance;
    pokeApiSerice = TestBed.inject(PokeApiService) as jasmine.SpyObj<PokeApiService>
    fixture.detectChanges();
  });

  it('Deve criar o component', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });

  it(`#${PokeListComponent.prototype.getSearch.name} Deve pesquisar e filtrar o pokemon`, () => {
    const value: string = ''
    const spy = spyOn(component, 'listarPokemons')
    component.getSearch(value)
    expect(spy).toHaveBeenCalled();
  })
});
