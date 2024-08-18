import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFormfieldComponent } from './mat-formfield.component';

describe('MatFormfieldComponent', () => {
  let component: MatFormfieldComponent;
  let fixture: ComponentFixture<MatFormfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormfieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatFormfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
