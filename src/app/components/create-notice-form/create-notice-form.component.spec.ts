import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateNoticeFormComponent } from './create-notice-form.component';

describe('CreateNoticeFormComponent', () => {
  let component: CreateNoticeFormComponent;
  let fixture: ComponentFixture<CreateNoticeFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CreateNoticeFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateNoticeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
