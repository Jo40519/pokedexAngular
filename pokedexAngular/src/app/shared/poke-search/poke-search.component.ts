import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {

  @Output() emitSearch = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  search(value: string) {
   this.emitSearch.emit(value)
  }

}
