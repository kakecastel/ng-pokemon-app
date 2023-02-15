import { Component,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { POKEMONS } from '../mock-pokemon';
import Pokemon from '../pokemon';
@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">
      editer {{pokemon?.name}}
    </h2>
    <p *ngIf="pokemon" class="center">
    <img [src]="pokemon.picture">
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon">
    </app-pokemon-form>
  `,
  styles: [
  ]
})
export class EditPokemonComponent implements OnInit {
pokemon : Pokemon | undefined ;
constructor(private route : ActivatedRoute,
private pokemonService : PokemonService){
	
}
ngOnInit(){
	const pokemonId : string | null = this.route.snapshot.paramMap.get('id');
	if(pokemonId) this.pokemon=this.pokemonService.getPokemonById(+pokemonId);
	else  this.pokemon=undefined;

}

}
