import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ViewsRoutingModule, 
    ViewsHomeComponent,
    SharedModule
  ],
  exports: [ViewsHomeComponent]
})
export class ViewsModule { }
