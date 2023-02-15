import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
	//{ path:'pokemons', component : ListPokemonComponent },
	//{ path:'pokemon/:id', component : DetailPokemonComponent },
	{ path:'**', component : PageNotFoundComponent }
	//{ path:'', redirecTo : 'pokemons', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
