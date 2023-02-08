import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTicketsComponent } from './info-tickets.component';

describe('InfoTicketsComponent', () => {
  let component: InfoTicketsComponent;
  let fixture: ComponentFixture<InfoTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTicketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
