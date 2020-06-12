import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KomboComponent } from './kombo.component';

describe('KomboComponent', () => {
  let component: KomboComponent;
  let fixture: ComponentFixture<KomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
