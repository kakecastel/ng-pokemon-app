import { Component,OnInit,Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import Pokemon from '../pokemon';
import {Router } from '@angular/router';
@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit{
@Input() pokemon : Pokemon;
types: Array<string>;
constructor(private pokemonService : PokemonService,
private routelink : Router) {

 }
ngOnInit():void{
		this.types = this.pokemonService.getPokemonTypeList();
}

hasType(type : string): boolean{
		return this.pokemon.types.includes(type);
}

 selectType($event : Event, type : string) {
 	//--ceci me permet de savoir si l'element a ete coche ou pas 
 	const isChecked : boolean = ($event.target as HTMLInputElement).checked;
 	if(isChecked)
 	{
 		//---ajoute le type dans la liste de type du pokemon courant
 		this.pokemon.types.push(type);
 	}
 	else{

 			//---je recupere l'index de l'element dans le tableau

 			const index = this.pokemon.types.indexOf(type);

 			//---je supprime l'element du tableau

 			this.pokemon.types.splice(index,1);

 	}

 }
 onSubmit() {
 	 console.log(`sumit form ! `);	
 	 	this.routelink.navigate(['/pokemon',this.pokemon.id]);
 }

 isTypesValid(type : string) : boolean{
 	if(this.pokemon.types.length == 1 && this.hasType(type) )
 	{
 	  return false;
 	}
 	if(this.pokemon.types.length > 2 && !this.hasType(type) )
 	{
 	  return false;
 	}
 	  return true;
 }

}
