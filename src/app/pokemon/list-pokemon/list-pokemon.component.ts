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
constructor(private routelink : Router,
            private pokemonService : PokemonService
){
	
}
	pokemons=this.pokemonService.getPokemonList();
	pokemonSelected : Pokemon | undefined ;
	selectPokemon(pokemonId : Pokemon){
    const pokemon : Pokemon |undefined  = this.pokemons.find(pokemon => pokemon.id == +pokemonId.id);

    if(pokemon){
      console.log(`Vous avez demande le pokemon   ${pokemon.name}`);
    }
    else{
      console.log(`Vous avez demande le pokemon qui n'existe pas `);
      this.pokemonSelected=pokemon;
    }
  }

  goToPokemon(pokemon : Pokemon){
	this.routelink.navigate(['/pokemon',pokemon.id]);
	}

}
