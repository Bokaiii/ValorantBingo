import { Component, Input, OnInit } from '@angular/core';
import { BingoBlockComponent } from '../bingo-block/bingo-block.component';
import { NgFor } from '@angular/common';
import { DataService } from '../services/data-service.service';
import { BingoItem } from '../../typings';

@Component({
  selector: 'app-bingo-board',
  standalone: true,
  imports: [BingoBlockComponent, NgFor],
  templateUrl: './bingo-board.component.html',
  styleUrl: './bingo-board.component.scss'
})
export class BingoBoardComponent {
  @Input() public bingoItems: BingoItem[] = [];
}
