import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactComponentComponentWrapper } from 'src/app/react-component/react-component.component';

describe('ReactComponentComponent', () => {
  let component: ReactComponentComponentWrapper;
  let fixture: ComponentFixture<ReactComponentComponentWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactComponentComponentWrapper ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactComponentComponentWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
