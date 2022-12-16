import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovosistemasComponent } from './novosistemas.component';

describe('NovosistemasComponent', () => {
  let component: NovosistemasComponent;
  let fixture: ComponentFixture<NovosistemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovosistemasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovosistemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
