import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadBoardComponent } from './download-board.component';

describe('DownloadBoardComponent', () => {
  let component: DownloadBoardComponent;
  let fixture: ComponentFixture<DownloadBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownloadBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
