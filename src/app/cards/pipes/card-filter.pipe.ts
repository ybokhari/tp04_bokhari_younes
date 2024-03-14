import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardFilter',
})
export class CardFilterPipe implements PipeTransform {
  transform(cards: any[], searchText: string): any[] {
    if (!cards || !searchText) {
      return cards;
    }
    return cards.filter((card) =>
      card.cardName.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
