import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenModalComponent } from './template-driven-modal.component';

describe('TemplateDrivenModalComponent', () => {
  let component: TemplateDrivenModalComponent;
  let fixture: ComponentFixture<TemplateDrivenModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
