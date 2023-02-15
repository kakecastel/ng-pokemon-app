import { Component,OnInit } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon';
import Pokemon from './pokemon/pokemon';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  title = 'ng-pokemon-app';
  pokemons=POKEMONS;
  pokemonSelected : Pokemon | undefined ;
  ngOnInit():void{

    console.table(this.pokemons);
   // this.selectPokemon(this.pokemons[3]);
  }
   //selectPokemon(event : MouseEvent){
    //const index : number = +(event.target as HTMLInputElement).value;
    //console.log(`Vous avez clique sur le pokemon ${this.pokemons[index].name}`);
  //}

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
}
