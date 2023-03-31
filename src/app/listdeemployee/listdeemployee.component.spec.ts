import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdeemployeeComponent } from './listdeemployee.component';

describe('ListdeemployeeComponent', () => {
  let component: ListdeemployeeComponent;
  let fixture: ComponentFixture<ListdeemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdeemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdeemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
