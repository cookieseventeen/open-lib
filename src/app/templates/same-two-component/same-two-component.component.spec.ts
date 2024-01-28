import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SameTwoComponentComponent } from './same-two-component.component';

describe('SameTwoComponentComponent', () => {
  let component: SameTwoComponentComponent;
  let fixture: ComponentFixture<SameTwoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SameTwoComponentComponent]
    });
    fixture = TestBed.createComponent(SameTwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
