import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingBarComponent } from './typing-bar.component';

describe('TypingBarComponent', () => {
  let component: TypingBarComponent;
  let fixture: ComponentFixture<TypingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
