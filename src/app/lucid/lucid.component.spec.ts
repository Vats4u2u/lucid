import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucidComponent } from './lucid.component';

describe('LucidComponent', () => {
  let component: LucidComponent;
  let fixture: ComponentFixture<LucidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LucidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LucidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
