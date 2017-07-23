import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTypeComponent } from './technology-type.component';

describe('TechnologyTypeComponent', () => {
  let component: TechnologyTypeComponent;
  let fixture: ComponentFixture<TechnologyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
