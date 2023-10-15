import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbbElementComponent } from './bbb-element.component';

describe('BbbElementComponent', () => {
  let component: BbbElementComponent;
  let fixture: ComponentFixture<BbbElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BbbElementComponent]
    });
    fixture = TestBed.createComponent(BbbElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
