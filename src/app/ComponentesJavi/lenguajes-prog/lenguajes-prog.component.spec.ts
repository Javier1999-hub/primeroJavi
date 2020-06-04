import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajesProgComponent } from './lenguajes-prog.component';

describe('LenguajesProgComponent', () => {
  let component: LenguajesProgComponent;
  let fixture: ComponentFixture<LenguajesProgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguajesProgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguajesProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
