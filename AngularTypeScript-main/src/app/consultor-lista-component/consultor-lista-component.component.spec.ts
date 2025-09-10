import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorListaComponentComponent } from './consultor-lista-component.component';

describe('ConsultorListaComponentComponent', () => {
  let component: ConsultorListaComponentComponent;
  let fixture: ComponentFixture<ConsultorListaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultorListaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultorListaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
