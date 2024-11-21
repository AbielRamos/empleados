import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProbedoresPage } from './probedores.page';

describe('ProbedoresPage', () => {
  let component: ProbedoresPage;
  let fixture: ComponentFixture<ProbedoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
