import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinatorComponent } from './minator.component';

describe('MinatorComponent', () => {
  let component: MinatorComponent;
  let fixture: ComponentFixture<MinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
