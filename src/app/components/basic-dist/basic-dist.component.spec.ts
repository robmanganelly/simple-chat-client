import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDistComponent } from './basic-dist.component';

describe('BasicDistComponent', () => {
  let component: BasicDistComponent;
  let fixture: ComponentFixture<BasicDistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
