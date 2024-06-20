import { Component, Input } from '@angular/core';
import { BingoItem } from '../../typings';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-bingo-block',
  standalone: true,
  imports: [NgIf],
  templateUrl: './bingo-block.component.html',
  styleUrl: './bingo-block.component.scss'
})
export class BingoBlockComponent {
  @Input() public bingoItem!: BingoItem;

  public toggleCompletion() {
    this.bingoItem.completed = !this.bingoItem.completed;
  }
}
