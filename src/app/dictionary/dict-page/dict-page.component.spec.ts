import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictPageComponent } from './dict-page.component';

describe('DictPageComponent', () => {
  let component: DictPageComponent;
  let fixture: ComponentFixture<DictPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DictPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DictPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
