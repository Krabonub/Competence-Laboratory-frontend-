import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompetenceGroupComponent } from './add-competence-group.component';

describe('AddCompetenceGroupComponent', () => {
  let component: AddCompetenceGroupComponent;
  let fixture: ComponentFixture<AddCompetenceGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCompetenceGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompetenceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
