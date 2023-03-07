import { Component,OnInit} from '@angular/core';
import { PokemonService } from '../pokemon.service';
import Pokemon from '../pokemon';
import { Router } from '@angular/router';
import { Observable,Subject,debounceTime,distinctUntilChanged,switchMap} from 'rxjs';
@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {
//----permet de recuperer les elements saisie par l'utilisateur dynamiquement
searchTerms = new Subject<string>();
pokemons$ : Observable<Pokemon[]> ;
constructor(private router : Router,
private pokemonService : PokemonService){}
ngOnInit():void{
	this.pokemons$=this.searchTerms.pipe(
		debounceTime(300), //----permet de considere les elements de recherche apres une latence de 300milisecondes minimun

		distinctUntilChanged(), //---permet de ne pas faire la recherche pour deux element identique qui se suive 

		switchMap((term) => this.pokemonService.searchPokemonList(term))

	);
}


search(term : string){
	this.searchTerms.next(term);
}

goToDetail(pokemon : Pokemon){
	const link =['/pokemon',pokemon.id];
	this.router.navigate(link);
}


}
