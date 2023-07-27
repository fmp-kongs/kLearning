import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kLearning'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('kLearning');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('kLearning app is running!');
  });


  // manually written test cases

  it("testing title",()=>{
    expect(component.componentName).toBe("app")  // component created above beforeEach // run "ng test"
  })

  it("testing function",()=>{
    expect(component.sum(40,60)).toBe(100)
  })

  it("testing html element",()=>{
    const data = fixture.nativeElement
    expect(data.querySelector(".unit-test").textContent).toContain("unit test")
  })


});
