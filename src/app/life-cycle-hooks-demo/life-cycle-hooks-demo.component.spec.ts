import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHooksDemoComponent } from './life-cycle-hooks-demo.component';

describe('LifeCycleHooksDemoComponent', () => {
  let component: LifeCycleHooksDemoComponent;
  let fixture: ComponentFixture<LifeCycleHooksDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeCycleHooksDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleHooksDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
