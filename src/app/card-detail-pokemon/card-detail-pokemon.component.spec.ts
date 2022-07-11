import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailPokemonComponent } from './card-detail-pokemon.component';

describe('CardDetailPokemonComponent', () => {
  let component: CardDetailPokemonComponent;
  let fixture: ComponentFixture<CardDetailPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
