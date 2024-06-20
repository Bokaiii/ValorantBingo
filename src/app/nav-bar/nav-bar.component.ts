import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FontAwesomeModule, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  public hasDownloaded: boolean = false;
  @Output() public downloadEmitter = new EventEmitter();
  
  constructor(private dataService: DataService) {  }

  faCheck = faCheck;

  public newBingoBoard(): void {
    window.location.reload();
  }

  public download(): void {
    this.downloadEmitter.emit();
  }
}
