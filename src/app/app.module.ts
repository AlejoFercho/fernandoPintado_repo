import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ButtonComponent } from './button/button.component';
import { CardSimplePokemonComponent } from './card-simple-pokemon/card-simple-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { CardDetailPokemonComponent } from './card-detail-pokemon/card-detail-pokemon.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PaginationComponent,
    ButtonComponent,
    CardSimplePokemonComponent,
    CardDetailPokemonComponent,
    CardComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
