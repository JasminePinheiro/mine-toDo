import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPortalComponent } from './access-portal.component';

describe('AccessPortalComponent', () => {
  let component: AccessPortalComponent;
  let fixture: ComponentFixture<AccessPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessPortalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
