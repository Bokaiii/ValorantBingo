import { Component, Input, OnInit } from '@angular/core';
import { BingoBlockComponent } from '../bingo-block/bingo-block.component';
import { NgFor } from '@angular/common';
import { BingoItem } from '../../typings';

@Component({
  selector: 'app-download-board',
  standalone: true,
  imports: [BingoBlockComponent, NgFor],
  templateUrl: './download-board.component.html',
  styleUrl: './download-board.component.scss'
})
export class DownloadBoardComponent {
  @Input() public bingoItems: BingoItem[] = [];
}
