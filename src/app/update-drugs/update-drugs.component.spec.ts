import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDrugsComponent } from './update-drugs.component';

describe('UpdateDrugsComponent', () => {
  let component: UpdateDrugsComponent;
  let fixture: ComponentFixture<UpdateDrugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDrugsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDrugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
