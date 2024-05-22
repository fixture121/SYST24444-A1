import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineBookstoreComponent } from './online-bookstore.component';

describe('OnlineBookstoreComponent', () => {
  let component: OnlineBookstoreComponent;
  let fixture: ComponentFixture<OnlineBookstoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlineBookstoreComponent]
    });
    fixture = TestBed.createComponent(OnlineBookstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
