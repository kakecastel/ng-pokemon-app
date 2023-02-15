import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { AppComponent } from './app.component';
//import { BorderCardDirective } from './border-card.directive';
//import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
//import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
//import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PokemonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
