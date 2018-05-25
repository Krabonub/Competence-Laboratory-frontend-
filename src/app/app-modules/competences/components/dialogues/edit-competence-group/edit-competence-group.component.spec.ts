import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompetenceGroupComponent } from './edit-competence-group.component';

describe('EditCompetenceGroupComponent', () => {
  let component: EditCompetenceGroupComponent;
  let fixture: ComponentFixture<EditCompetenceGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCompetenceGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompetenceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
