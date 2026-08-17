import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainType } from './train-type';

describe('TrainType', () => {
  let component: TrainType;
  let fixture: ComponentFixture<TrainType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainType],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainType);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
