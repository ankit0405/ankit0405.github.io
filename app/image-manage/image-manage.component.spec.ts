import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageManageComponent } from './image-manage.component';

describe('ImageManageComponent', () => {
  let component: ImageManageComponent;
  let fixture: ComponentFixture<ImageManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
