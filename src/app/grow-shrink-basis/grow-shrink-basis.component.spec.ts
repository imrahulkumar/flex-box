import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowShrinkBasisComponent } from './grow-shrink-basis.component';

describe('GrowShrinkBasisComponent', () => {
  let component: GrowShrinkBasisComponent;
  let fixture: ComponentFixture<GrowShrinkBasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowShrinkBasisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowShrinkBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
