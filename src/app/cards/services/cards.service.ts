import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cards: any[] = [];

  constructor() {}

  addCard(card: any) {
    this.cards.push(card);
  }

  getCards(): any[] {
    return this.cards;
  }
}
