import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientHiearchyComponent } from './client-hiearchy.component';

describe('ClientHiearchyComponent', () => {
  let component: ClientHiearchyComponent;
  let fixture: ComponentFixture<ClientHiearchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientHiearchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientHiearchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
