import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdevoyageComponent } from './listdevoyage.component';

describe('ListdevoyageComponent', () => {
  let component: ListdevoyageComponent;
  let fixture: ComponentFixture<ListdevoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdevoyageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdevoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
