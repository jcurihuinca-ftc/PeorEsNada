import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NoticeListComponent } from './notice-list.component';

describe('NoticeListComponent', () => {
  let component: NoticeListComponent;
  let fixture: ComponentFixture<NoticeListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoticeListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NoticeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
