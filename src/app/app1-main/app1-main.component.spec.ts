import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App1MainComponent } from './app1-main.component';

describe('App1MainComponent', () => {
  let component: App1MainComponent;
  let fixture: ComponentFixture<App1MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ App1MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(App1MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
