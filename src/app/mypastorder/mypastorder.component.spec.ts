import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypastorderComponent } from './mypastorder.component';

describe('MypastorderComponent', () => {
  let component: MypastorderComponent;
  let fixture: ComponentFixture<MypastorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypastorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypastorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
