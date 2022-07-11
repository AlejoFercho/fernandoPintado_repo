import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-detail-pokemon',
  templateUrl: './card-detail-pokemon.component.html',
  styleUrls: ['./card-detail-pokemon.component.sass']
})
export class CardDetailPokemonComponent {
  @Input() pokemon: any;

  constructor() {
    this.pokemon = null;
  }
}
