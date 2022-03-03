import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlignContentComponent } from './align-content/align-content.component';
import { AlignSelfComponent } from './align-self/align-self.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { FlexBasisComponent } from './flex-basis/flex-basis.component';
import { FlexGrowComponent } from './flex-grow/flex-grow.component';
import { FlexShrinkComponent } from './flex-shrink/flex-shrink.component';
import { FlexWrapComponent } from './flex-wrap/flex-wrap.component';
import { FlowDirectionComponent } from './flow-direction/flow-direction.component';
import { GridsComponent } from './grids/grids.component';
import { GrowShrinkBasisComponent } from './grow-shrink-basis/grow-shrink-basis.component';
import { HexagonComponent } from './hexagon/hexagon.component';
import { HolygrailComponent } from './holygrail/holygrail.component';
import { JustifyComponent } from './justify/justify.component';
import { MediaObjectsComponent } from './media-objects/media-objects.component';
import { OrderComponent } from './order/order.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { VerticalComponent } from './vertical/vertical.component';

const routes: Routes = [
  { path: 'align-content', component: AlignContentComponent },
  { path: 'align-self', component: AlignSelfComponent },
  { path: 'alignment', component: AlignmentComponent },
  { path: 'flex-basis', component: FlexBasisComponent },
  { path: 'flex-grow', component: FlexGrowComponent },
  { path: 'flex-shrink', component: FlexShrinkComponent },
  { path: 'flex-wrap', component: FlexWrapComponent },
  { path: 'flow-direction', component: FlowDirectionComponent },
  { path: 'grids', component: GridsComponent },
  { path: 'grow-shrink-basis', component: GrowShrinkBasisComponent },
  { path: 'hexagon', component: HexagonComponent },
  { path: 'holygrail', component: HolygrailComponent },
  { path: 'justify', component: JustifyComponent },
  { path: 'media-objects', component: MediaObjectsComponent },
  { path: 'order', component:  OrderComponent},
  { path: 'showcase', component: ShowcaseComponent },
  { path: 'vertical', component: VerticalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
