import { TrackedArticle, Currency } from "./../../entities/tracked-item.interface";
import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-item-card",
  templateUrl: "./item-card.component.html",
  styleUrls: ["./item-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent implements OnInit, OnChanges {

  @Input()
  item: TrackedArticle = {
    id: "gnrsgjghjtohlth1234",
    name: "LG 34WK95U 5K Ultrawide Monitor",
    currency: Currency.EUR,
    initialPrice: 959.50,
    currentPrice: 799,
    trendPrice: 856.35,
    lastCheckedTimestamp: new Date(2020, 7, 29, 14, 32, 0).getTime(),
    created: new Date(2020, 7, 29, 14, 31, 0).getTime(),
    url: "https://www.amazon.de/LG-34WK95U-W-34Zoll-schwarz-Flachbildschirm/dp/B0798TGN2M/ref=sr_1_1?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=21AKOHDJ54AR7&dchild=1&keywords=lg+34wk95u&qid=1598711583&sprefix=lg+34wk%2Caps%2C165&sr=8-1",
    domain: "amazon.de"
  };

  isItemLessExpensive = false;
  lastChecked: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.item) {
      return;
    }
    this.isItemLessExpensive = this.item.currentPrice <= this.item.initialPrice;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.isItemLessExpensive = this.item.currentPrice <= this.item.initialPrice;
  }

  calculateLastChecked(from: number, to: number): string {
    const diffMinutes = Math.round((to - from) / 1000 / 60);
    const diffHours = Math.floor(diffMinutes / 60);

    if (to < from) {
      return "-";
    }
    if (from === to) {
      return "now";
    }
    if (diffMinutes <= 60) {
      return `${diffMinutes}m`;
    }
    if (diffHours < 24) {
      return `${diffHours}h`;
    }
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d`;
  }
}
