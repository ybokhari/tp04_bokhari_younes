import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardFormComponent } from './components/card-form/card-form.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardsService } from './services/cards.service';
import { CardFilterPipe } from './pipes/card-filter.pipe';
import { RedIfOverLimitDirective } from './directives/red-if-over-limit-ccv.directive';

@NgModule({
  declarations: [
    CardFormComponent,
    CardsListComponent,
    CardFilterPipe,
    RedIfOverLimitDirective,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [CardsService],
  exports: [CardFormComponent, CardsListComponent],
})
export class CardsModule {}
