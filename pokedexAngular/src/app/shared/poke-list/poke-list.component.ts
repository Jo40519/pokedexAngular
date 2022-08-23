import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../service/poke-api.service';
import { LISTA_POKEMONS } from '../../constants/constatns';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;
  public telaVisivel = LISTA_POKEMONS;

  constructor(private pokeApiService: PokeApiService) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(res => {
      this.setAllPokemons = res.results
      this.getAllPokemons = this.setAllPokemons
      console.log(this.getAllPokemons)
    });
  }

  getSearch(valor: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(valor.toLowerCase())
    })

    this.getAllPokemons = filter;
  }
}
