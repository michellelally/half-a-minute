import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePersonalizeComponent } from './game-personalize.component';

describe('GamePersonalizeComponent', () => {
  let component: GamePersonalizeComponent;
  let fixture: ComponentFixture<GamePersonalizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePersonalizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePersonalizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
