import { Router, NavigationEnd } from '@angular/router';
import { Tab } from './../../entities/tab.interface';
import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { filter, map, takeUntil } from "rxjs/operators";
import { Subject } from 'rxjs';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {

  @Input()
  title = "PriceBoard";

  @Input()
  isNavigateBackEnabled = false;

  destroyed$ = new Subject<boolean>();

  title$ = this.router.events.pipe(
    takeUntil(this.destroyed$),
    filter((event) => event instanceof NavigationEnd),
    map((event: NavigationEnd) => {
      const activeTab = this.tabs.find(tab => tab.route === event.url);
      return activeTab ? activeTab.title : "";
    })
  );

  readonly tabs: Tab[] = [
    {
      iconName: "home",
      title: "Home",
      route: "/home"
    },
    {
      iconName: "plus-circle",
      title: "New",
      route: "/new"
    },
    {
      iconName: "settings",
      title: "Settings",
      route: "/settings"
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
