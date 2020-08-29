import { CurrencyPipe } from '@angular/common';

export enum Currency {
    EUR = "EUR",
    USD = "USD"
}

export interface TrackedArticle {
    readonly id: string;
    readonly name: string;
    readonly initialPrice: number;
    readonly currentPrice: number;
    readonly trendPrice: number;
    readonly lastCheckedTimestamp: number;
    readonly url: string;
    readonly domain: string;
    readonly created: number;
    readonly currency: Currency;
}

// TODO: Needed later for BE
class TrackedItem {

    private _name: string;
    private _initialPrice: number;
    private _website: string;
    private _created: number;
    private _currentPrice: number;

    constructor(name: string, initialPrice: number, website: string) {
        if (!name) {
            throw new Error("Name cannot not be empty!");
        }
        if (!initialPrice || initialPrice <= 0) {
            throw Error("Initial price must be greater than 0!");
        }
        if (!website) {
            throw new Error("Website cannot not be empty!");
        }
        this._name = name;
        this._initialPrice = initialPrice;
        this._website = website;
        this._created = Date.now();
        this._currentPrice = initialPrice;
    }


    public get name(): string {
        return this.name;
    }


    public get initialPrice(): number {
        return this._initialPrice;
    }


    public get website(): string {
        return this._website;
    }


    public get created(): number {
        return this._created;
    }


    public get currentPrice(): number {
        return this._currentPrice;
    }


    public set currentPrice(price: number) {
        if (!price || price <= 0) {
            throw Error("Price must be greater than 0!");
        }
        this._currentPrice = price;
    }
}