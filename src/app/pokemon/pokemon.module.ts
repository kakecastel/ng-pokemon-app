import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
const pokemonRoutes: Routes = [
  { path:'edit/pokemon/:id', component : EditPokemonComponent },
	{ path:'pokemons', component : ListPokemonComponent },
	{ path:'pokemon/:id', component : DetailPokemonComponent }
	//{ path:'**', component : PageNotFoundComponent }
	//{ path:'', redirecTo : 'pokemons', pathMatch:'full' }
];

@NgModule({
  declarations: [
  	BorderCardDirective,
    PokemonTypeColorPipe,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes),
    FormsModule
  ]
})
export class PokemonModule { }
