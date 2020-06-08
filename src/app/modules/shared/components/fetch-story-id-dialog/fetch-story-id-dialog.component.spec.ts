import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchStoryIdDialogComponent } from './fetch-story-id-dialog.component';

describe('FetchStoryIdDialogComponent', () => {
  let component: FetchStoryIdDialogComponent;
  let fixture: ComponentFixture<FetchStoryIdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchStoryIdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchStoryIdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
