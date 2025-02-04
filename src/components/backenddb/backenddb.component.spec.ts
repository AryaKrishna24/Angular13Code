import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackenddbComponent } from './backenddb.component';

describe('BackenddbComponent', () => {
  let component: BackenddbComponent;
  let fixture: ComponentFixture<BackenddbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackenddbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackenddbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
