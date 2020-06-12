import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaniComponent } from './bani.component';

describe('BaniComponent', () => {
  let component: BaniComponent;
  let fixture: ComponentFixture<BaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
