import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdevoyagesimilaireComponent } from './listdevoyagesimilaire.component';

describe('ListdevoyagesimilaireComponent', () => {
  let component: ListdevoyagesimilaireComponent;
  let fixture: ComponentFixture<ListdevoyagesimilaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListdevoyagesimilaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdevoyagesimilaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
