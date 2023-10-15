import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoElementInjectorComponent } from './demo-element-injector.component';

describe('DemoElementInjectorComponent', () => {
  let component: DemoElementInjectorComponent;
  let fixture: ComponentFixture<DemoElementInjectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoElementInjectorComponent]
    });
    fixture = TestBed.createComponent(DemoElementInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
