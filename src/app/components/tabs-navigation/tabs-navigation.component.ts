import { Tab } from './../../entities/tab.interface';
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-tabs-navigation",
  templateUrl: "./tabs-navigation.component.html",
  styleUrls: ["./tabs-navigation.component.scss"]
})
export class TabsNavigationComponent implements OnInit {

  @Input()
  tabs: Tab[] = [];

  @Output()
  tabClicked = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
