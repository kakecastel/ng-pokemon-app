import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { catchError,Observable,of,tap } from 'rxjs';
import Pokemon from './pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }
  
  //----Avoir la liste des pokemons
  
  getPokemonList() : Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pokemonlist) => console.table(pokemonlist)),
        catchError((error)=>{
        console.log(error);
        return of([]);
      })
    );
  }

    //----recherche dynamique
  
  searchPokemonList(term : string) : Observable<Pokemon[]>{
    if(term.length < 2) return of([]); 

    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((pokemonlist) => console.table(pokemonlist)),
        catchError((error)=>{
        console.log(error);
        return of([]);
      })
    );
  }

  //----permet d'avoir un pokemon a partir de son ID

  getPokemonById(pokemonId : number) : Observable<Pokemon | undefined> {
  	return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((pokemon) => console.table(pokemon)),
        catchError((error)=>{
        console.log(error);
        return of(undefined);
      })
    );
  }

    //----permet de supprimer un pokemon

  deletePokemonById(pokemonId : number) : Observable<Pokemon | null> {
    return this.http.delete<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap((reponse) => console.table(reponse)),
        catchError((error)=>{
        console.log(error);
        return of(null);
      })
    );
  }

  //-----permet d'ajouter un pokemon 
  updatePokemon(pokemon : Pokemon) : Observable<Pokemon |null> {
    const httpOptions ={
      headers : new HttpHeaders ({ 'Content-Type' : 'application/json'})

    };

    return this.http.put<Pokemon>('api/pokemons',pokemon,httpOptions).pipe(
      tap((reponse) => console.table(reponse)),
        catchError((error)=>{
        console.log(error);
        return of(null);
      })
    );
  }

  //---permet d'ajouter un pokemon

  addPokemon(pokemon : Pokemon) : Observable<Pokemon |undefined> {
    const httpOptions ={
      headers : new HttpHeaders ({ 'Content-Type' : 'application/json'})

    };
    return this.http.post<Pokemon>('api/pokemons',pokemon,httpOptions).pipe(
      tap((reponse) => console.table(reponse)),
        catchError((error)=>{
        console.log(error);
        return of(undefined);
      })
    );
  }
  getPokemonTypeList() : string[]{

  	return[

  		"Plante", "Feu","Eau", "Insecte","Normal", "Electrick","Poison", "Fee","Vol","Combat", "Psy"
  	];


  
  }

}
