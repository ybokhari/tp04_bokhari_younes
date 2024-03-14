import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-card-form',
  standalone: false,
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css',
})
export class CardFormComponent {
  cardForm: FormGroup;

  constructor(private fb: FormBuilder, private cardsService: CardsService) {
    this.cardForm = this.fb.group({
      cardName: ['', Validators.required],
      cardCode: ['', Validators.required],
      ccv: ['', Validators.required],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      this.cardsService.addCard(this.cardForm.value);
      this.cardForm.reset();
    }
  }
}
