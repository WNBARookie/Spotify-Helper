import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongInfoDetailsComponent } from './song-info-details.component';

describe('SongInfoDetailsComponent', () => {
  let component: SongInfoDetailsComponent;
  let fixture: ComponentFixture<SongInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongInfoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
