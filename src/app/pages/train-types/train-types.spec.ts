import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainTypes } from './train-types';

describe('TrainTypes', () => {
  let component: TrainTypes;
  let fixture: ComponentFixture<TrainTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainTypes],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainTypes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
