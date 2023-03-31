import { ComponentFixture, TestBed } from '@angular/core/testing';

import {voyageComponent} from './voyage.component';

describe('ProductsComponent', () => {
  let component: voyageComponent;
  let fixture: ComponentFixture<voyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ voyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(voyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
