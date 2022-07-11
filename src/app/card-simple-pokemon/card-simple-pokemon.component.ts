import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-card-simple-pokemon',
  templateUrl: './card-simple-pokemon.component.html',
  styleUrls: ['./card-simple-pokemon.component.sass']
})
export class CardSimplePokemonComponent {
  @Input() pokemon: Pokemon;
 
  constructor() {
    this.pokemon = {
      name: '',
      url: '',
    };
  }
}
