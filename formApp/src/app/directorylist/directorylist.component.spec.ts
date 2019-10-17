import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorylistComponent } from './directorylist.component';

describe('DirectorylistComponent', () => {
  let component: DirectorylistComponent;
  let fixture: ComponentFixture<DirectorylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
