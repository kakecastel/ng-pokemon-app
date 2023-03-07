import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon';
import { PokemonService } from '../pokemon.service';
import Pokemon from '../pokemon';
import {Router } from '@angular/router';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {

pokemonlist : Pokemon[];
constructor(private routelink : Router,
            private pokemonService : PokemonService
){}
	
ngOnInit(){
  this.pokemonService.getPokemonList()
  .subscribe(pokemonlist => this.pokemonlist = pokemonlist);

}

  goToPokemon(pokemon : Pokemon){
	this.routelink.navigate(['/pokemon',pokemon.id]);
	}

}
