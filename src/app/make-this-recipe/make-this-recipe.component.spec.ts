import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeThisRecipeComponent } from './make-this-recipe.component';

describe('MakeThisRecipeComponent', () => {
  let component: MakeThisRecipeComponent;
  let fixture: ComponentFixture<MakeThisRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeThisRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeThisRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
