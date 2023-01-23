import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyConnectComponent } from './family-connect.component';

describe('FamilyConnectComponent', () => {
  let component: FamilyConnectComponent;
  let fixture: ComponentFixture<FamilyConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
