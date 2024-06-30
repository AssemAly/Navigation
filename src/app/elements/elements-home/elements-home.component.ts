import { Component } from '@angular/core';
import { PlaceHolderComponent } from '../place-holder/place-holder.component';
import { SharedModule } from '../../shared/shared.module';
import { SegmentComponent } from '../segment/segment.component';
@Component({
  selector: 'app-elements-home',
  standalone: true,
  imports: [PlaceHolderComponent,SharedModule,SegmentComponent],
  templateUrl: './elements-home.component.html',
  styleUrl: './elements-home.component.css'
})
export class ElementsHomeComponent {

}
