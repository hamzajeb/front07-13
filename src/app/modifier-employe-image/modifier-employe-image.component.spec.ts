import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierEmployeImageComponent } from './modifier-employe-image.component';

describe('ModifierEmployeImageComponent', () => {
  let component: ModifierEmployeImageComponent;
  let fixture: ComponentFixture<ModifierEmployeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierEmployeImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierEmployeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
