import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { IconsModule } from "./icons/icons.module";
import { ItemCardComponent } from "./components/item-card/item-card.component";
import { HomeComponent } from "./views/home/home.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { TabsNavigationComponent } from "./components/tabs-navigation/tabs-navigation.component";
import { SettingsComponent } from "./views/settings/settings.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCardComponent,
    HomeComponent,
    ToolbarComponent,
    TabsNavigationComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
