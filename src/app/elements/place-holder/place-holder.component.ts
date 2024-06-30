import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-holder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './place-holder.component.html',
  styleUrl: './place-holder.component.css'
})
export class PlaceHolderComponent {
  @Input() header = true;
  @Input() lines = 3;
}
