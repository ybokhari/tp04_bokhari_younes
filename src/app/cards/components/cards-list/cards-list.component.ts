import { Component } from '@angular/core';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
})
export class CardsListComponent {
  cards: any[];
  searchText: string = '';

  constructor(private cardsService: CardsService) {
    this.cards = this.cardsService.getCards();
  }
}
