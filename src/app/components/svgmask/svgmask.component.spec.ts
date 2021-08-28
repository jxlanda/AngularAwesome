import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgmaskComponent } from './svgmask.component';

describe('SvgmaskComponent', () => {
  let component: SvgmaskComponent;
  let fixture: ComponentFixture<SvgmaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgmaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgmaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
