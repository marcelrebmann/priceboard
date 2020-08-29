import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TabsNavigationComponent } from "./tabs-navigation.component";

describe("TabsNavigationComponent", () => {
  let component: TabsNavigationComponent;
  let fixture: ComponentFixture<TabsNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
