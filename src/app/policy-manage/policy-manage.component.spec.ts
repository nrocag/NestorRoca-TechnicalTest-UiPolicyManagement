import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyManageComponent } from './policy-manage.component';

describe('PolicyManageComponent', () => {
  let component: PolicyManageComponent;
  let fixture: ComponentFixture<PolicyManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
