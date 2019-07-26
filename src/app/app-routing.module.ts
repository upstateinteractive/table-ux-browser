import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableStackComponent } from './table-stack/table-stack.component';
import { HorizontalOverflowComponent } from './horizontal-overflow/horizontal-overflow.component';
import { HorizontalCardsComponent } from './horizontal-cards/horizontal-cards.component';
import { RowHoverPopoverComponent } from './row-hover-popover/row-hover-popover.component';
import { AccordianStackComponent } from './accordian-stack/accordian-stack.component';
import { CellTrunctionComponent } from './cell-trunction/cell-trunction.component';


const routes: Routes = [{
  path: 'table-stack',
  component: TableStackComponent
}, {
  path: 'horizontal-overflow',
  component: HorizontalOverflowComponent
}, {
  path: 'cell-truncation',
  component: CellTrunctionComponent
}, {
  path: 'accordian-stack',
  component: AccordianStackComponent
}, {
  path: 'row-hover-popover',
  component: RowHoverPopoverComponent
}, {
  path: 'horizontal-cards',
  component: HorizontalCardsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
