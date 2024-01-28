import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameComponentComponent } from './same-component.component';

describe('SameComponentComponent', () => {
  let component: SameComponentComponent;
  let fixture: ComponentFixture<SameComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SameComponentComponent]
    });
    fixture = TestBed.createComponent(SameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
