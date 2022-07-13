import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueAjouterEmployeComponent } from './dialogue-ajouter-employe.component';

describe('DialogueAjouterEmployeComponent', () => {
  let component: DialogueAjouterEmployeComponent;
  let fixture: ComponentFixture<DialogueAjouterEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueAjouterEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogueAjouterEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
