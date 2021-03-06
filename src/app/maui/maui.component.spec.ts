import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauiComponent } from './maui.component';

describe('MauiComponent', () => {
  let component: MauiComponent;
  let fixture: ComponentFixture<MauiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
