import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Hand, RemoveCard } from '../models';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  @Input()
  hand!: Hand;

  @Output()
  onRemoveCard = new Subject<RemoveCard>();

  removeCard(idx: number) {
    console.info(`>>> card: ${idx}`);
    this.onRemoveCard.next({
      name: this.hand.name,
      cardNum: idx,
    });
  }
}
