import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoruserprofileComponent } from './doctoruserprofile.component';

describe('DoctoruserprofileComponent', () => {
  let component: DoctoruserprofileComponent;
  let fixture: ComponentFixture<DoctoruserprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctoruserprofileComponent]
    });
    fixture = TestBed.createComponent(DoctoruserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
