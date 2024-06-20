import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { BingoBoardComponent } from '../bingo-board/bingo-board.component';
import { NgIf } from '@angular/common';
import { DownloadBoardComponent } from '../download-board/download-board.component';
import { BingoItem } from '../../typings';
import { DataService } from '../services/data-service.service';
import * as htmlToImage from 'html-to-image'

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [NavBarComponent, BingoBoardComponent, DownloadBoardComponent, NgIf],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  private darkMode: boolean = false;
  public isDownloading: boolean = false;

  public bingoItems: BingoItem[] = [];
  public bingoItemsDownload: BingoItem[] = [];

  constructor(private dataService: DataService) {  }
  
  ngOnInit(): void {
    this.toggleDarkMode();
    this.fetchBingoItems();
  }

  public toggleDarkMode(): void {
    this.darkMode = !this.darkMode;

    let root = document.getElementsByTagName('html')[0];
    if(this.darkMode) {
      root.classList.add('darkMode');
      root.classList.remove('lightMode');
      return;
    }

    root.classList.remove('darkMode');
    root.classList.add('lightMode');
  }

  public fetchBingoItems(): void {
    this.bingoItems = this.dataService.getBingoBoard();
  }

  public async download(): Promise<void> {
    this.isDownloading = true;

    this.bingoItemsDownload = this.bingoItems;
    for(let b of this.bingoItemsDownload) {
      b.completed = false;
    }

    //Sleep for 200ms
    await new Promise(resolve => setTimeout(resolve, 200));
    
    let element = document.getElementById('download-bingo-board');

    if(element == null) {
      this.isDownloading = false;
      return;
    }

    htmlToImage.toJpeg(element, { quality: 0.95 })
    .then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = 'Valorant Bingo Board';
      link.href = dataUrl;
      link.click();
    });

    this.isDownloading = false;
  }
}
