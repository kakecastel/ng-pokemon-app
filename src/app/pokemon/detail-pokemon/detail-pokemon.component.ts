import { Component , OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { POKEMONS } from '../mock-pokemon';
import Pokemon from '../pokemon';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit{
pokemon : Pokemon | undefined ;
pokemonList : Pokemon[];
constructor(private route : ActivatedRoute,
private routelink : Router,
private pokemonService : PokemonService){
	
}
ngOnInit(){
	this.pokemonList=this.pokemonService.getPokemonList();
	const pokemonId : string | null = this.route.snapshot.paramMap.get('id');
	if(pokemonId) this.pokemon=this.pokemonService.getPokemonById(+pokemonId);
}

goToPokemonList(){
	this.routelink.navigate(['/pokemons']);
}

goToEditPokemon(pokemon : Pokemon){
	this.routelink.navigate(['edit/pokemon',pokemon.id]);
}

}
