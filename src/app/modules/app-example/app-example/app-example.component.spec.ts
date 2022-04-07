import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExampleComponent } from './app-example.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppExampleComponent', () => {
  let component: AppExampleComponent;
  let fixture: ComponentFixture<AppExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppExampleComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppExampleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-testing-boilerplate-framework'`, () => {
    const fixture = TestBed.createComponent(AppExampleComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing-boilerplate-framework');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppExampleComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'angular-testing-boilerplate-framework app is running!'
    );
  });
});
