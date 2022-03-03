import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlignContentComponent } from './align-content/align-content.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { AlignSelfComponent } from './align-self/align-self.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AlignContentComponent,
    AlignmentComponent,
    AlignSelfComponent,
    FlexBasisComponent,
    FlexGrowComponent,
    FlexShrinkComponent,
    FlexWrapComponent,
    FlowDirectionComponent,
    GridsComponent,
    GrowShrinkBasisComponent,
    HexagonComponent,
    HolygrailComponent,
    JustifyComponent,
    MediaObjectsComponent,
    OrderComponent,
    ShowcaseComponent,
    VerticalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
