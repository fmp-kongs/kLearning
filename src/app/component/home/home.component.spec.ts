import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




// AAA --> arrange assert act  [testing]
// native element --> checks the DOM content

it('should contain "kLearning"',()=>{
  const aElement:HTMLElement = fixture.nativeElement;
  expect(aElement.textContent).toContain("kLearning");
})


//debug element  --> runs in non-browser element

it('should have a a tag of `kLearning`',()=>{
  let de:DebugElement = fixture.debugElement;
  expect(de.query(By.css('a')).nativeElement.innerText).toBe('kLearning');
})

it('should have Div in "Div section"',()=>{
  const divtxt = fixture.debugElement.nativeElement.querySelector('#div1');
  expect(divtxt.innerHTML).toBe('Div');
})

});