import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DddElementComponent } from './ddd-element.component';

describe('DddElementComponent', () => {
  let component: DddElementComponent;
  let fixture: ComponentFixture<DddElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DddElementComponent]
    });
    fixture = TestBed.createComponent(DddElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
