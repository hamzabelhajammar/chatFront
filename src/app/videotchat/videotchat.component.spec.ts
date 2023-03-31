import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotchatComponent } from './videotchat.component';

describe('VideotchatComponent', () => {
  let component: VideotchatComponent;
  let fixture: ComponentFixture<VideotchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideotchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideotchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
