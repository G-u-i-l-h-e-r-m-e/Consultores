import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorCardComponentComponent } from './consultor-card-component.component';

describe('ConsultorCardComponentComponent', () => {
  let component: ConsultorCardComponentComponent;
  let fixture: ComponentFixture<ConsultorCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultorCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultorCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
