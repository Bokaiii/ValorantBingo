import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingoBlockComponent } from './bingo-block.component';

describe('BingoBlockComponent', () => {
  let component: BingoBlockComponent;
  let fixture: ComponentFixture<BingoBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BingoBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BingoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
