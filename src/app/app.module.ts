import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorizontalOverflowComponent } from './horizontal-overflow/horizontal-overflow.component';
import { TableStackComponent } from './table-stack/table-stack.component';
import { CellTrunctionComponent } from './cell-trunction/cell-trunction.component';
import { AccordianStackComponent } from './accordian-stack/accordian-stack.component';
import { RowHoverPopoverComponent } from './row-hover-popover/row-hover-popover.component';
import { HorizontalCardsComponent } from './horizontal-cards/horizontal-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalOverflowComponent,
    TableStackComponent,
    CellTrunctionComponent,
    AccordianStackComponent,
    RowHoverPopoverComponent,
    HorizontalCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
