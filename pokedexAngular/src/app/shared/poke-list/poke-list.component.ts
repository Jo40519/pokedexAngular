import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
import { LISTA_POKEMONS, TELA_DETALHES_POKEMON } from '../../constants/constatns';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  public setAllPokemons: any;

  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.listarPokemons();
  }

  listarPokemons() {
    this.pokeApiService.apiListAllPokemons.subscribe(res => {
      this.setAllPokemons = res.results
      this.getAllPokemons = this.setAllPokemons
    },
    error => {
      this.apiError = true;
    }
    );
  }

  getSearch(valor: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(valor.toLowerCase())
    })

    this.getAllPokemons = filter;
  }
}
