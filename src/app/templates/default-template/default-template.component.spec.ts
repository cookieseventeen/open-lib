import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTemplateComponent } from './default-template.component';

describe('DefaultTemplateComponent', () => {
  let component: DefaultTemplateComponent;
  let fixture: ComponentFixture<DefaultTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultTemplateComponent]
    });
    fixture = TestBed.createComponent(DefaultTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
