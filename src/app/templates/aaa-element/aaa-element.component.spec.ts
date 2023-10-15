import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AaaElementComponent } from './aaa-element.component';

describe('AaaElementComponent', () => {
  let component: AaaElementComponent;
  let fixture: ComponentFixture<AaaElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AaaElementComponent]
    });
    fixture = TestBed.createComponent(AaaElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
