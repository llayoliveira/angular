import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCutomizadasComponent } from './diretivas-cutomizadas.component';

describe('DiretivasCutomizadasComponent', () => {
  let component: DiretivasCutomizadasComponent;
  let fixture: ComponentFixture<DiretivasCutomizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivasCutomizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCutomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
