import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnsFechaComponent } from './fns-fecha.component';

describe('FnsFechaComponent', () => {
  let component: FnsFechaComponent;
  let fixture: ComponentFixture<FnsFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FnsFechaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FnsFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
