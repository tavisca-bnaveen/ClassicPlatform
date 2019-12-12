import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsAndSuppsComponent } from './trips-and-supps.component';

describe('TripsAndSuppsComponent', () => {
  let component: TripsAndSuppsComponent;
  let fixture: ComponentFixture<TripsAndSuppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsAndSuppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsAndSuppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
