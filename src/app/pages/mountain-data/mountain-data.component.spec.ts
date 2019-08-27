import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainDataComponent } from './mountain-data.component';

describe('MountainDataComponent', () => {
  let component: MountainDataComponent;
  let fixture: ComponentFixture<MountainDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
