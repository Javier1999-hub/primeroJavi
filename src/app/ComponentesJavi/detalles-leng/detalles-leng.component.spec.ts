import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesLengComponent } from './detalles-leng.component';

describe('DetallesLengComponent', () => {
  let component: DetallesLengComponent;
  let fixture: ComponentFixture<DetallesLengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesLengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesLengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
