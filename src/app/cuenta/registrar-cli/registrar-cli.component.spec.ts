import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCliComponent } from './registrar-cli.component';

describe('RegistrarCliComponent', () => {
  let component: RegistrarCliComponent;
  let fixture: ComponentFixture<RegistrarCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
