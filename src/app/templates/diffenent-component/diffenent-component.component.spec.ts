import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffenentComponentComponent } from './diffenent-component.component';

describe('DiffenentComponentComponent', () => {
  let component: DiffenentComponentComponent;
  let fixture: ComponentFixture<DiffenentComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiffenentComponentComponent]
    });
    fixture = TestBed.createComponent(DiffenentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
