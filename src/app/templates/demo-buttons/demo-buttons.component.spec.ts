import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoButtonsComponent } from './demo-buttons.component';

describe('DemoButtonsComponent', () => {
  let component: DemoButtonsComponent;
  let fixture: ComponentFixture<DemoButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoButtonsComponent]
    });
    fixture = TestBed.createComponent(DemoButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
