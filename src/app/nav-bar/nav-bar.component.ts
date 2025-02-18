import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { NgIf } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule, NgIf, MatSlideToggleModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public hasDownloaded: boolean = false;
  private bokaiiPlaying: boolean = false;
  @Output() public toggleEmitter = new EventEmitter<boolean>();
  @Output() public downloadEmitter = new EventEmitter();
  @Output() public newBoardEmitter = new EventEmitter();
  
  constructor(private dataService: DataService) {  }

  faCheck = faCheck;

  public newBingoBoard(): void {
    this.newBoardEmitter.emit(this.bokaiiPlaying);
  }

  public download(): void {
    this.downloadEmitter.emit();
    this.hasDownloaded = true;
  }

  public togglePlayer() {
    this.bokaiiPlaying = !this.bokaiiPlaying;
    this.toggleEmitter.emit(this.bokaiiPlaying);
  }
}
