import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatElevationComponent } from './mat-elevation.component';

describe('MatElevationComponent', () => {
  let component: MatElevationComponent;
  let fixture: ComponentFixture<MatElevationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatElevationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatElevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
