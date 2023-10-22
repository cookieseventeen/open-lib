import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CccElementComponent } from './ccc-element.component';

describe('CccElementComponent', () => {
  let component: CccElementComponent;
  let fixture: ComponentFixture<CccElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CccElementComponent]
    });
    fixture = TestBed.createComponent(CccElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
