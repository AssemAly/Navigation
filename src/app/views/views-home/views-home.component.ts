import { Component, OnInit } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { SharedModule } from '../../shared/shared.module';
import { ItemListComponent } from '../item-list/item-list.component';
@Component({
  selector: 'app-views-home',
  standalone: true,
  imports: [StatisticsComponent, SharedModule, ItemListComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css'
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {value: 22, lable: "No of users"},
    {value: 900, lable: "Revenue"},
    {value: 50, lable: "Reviews"}
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in'
    }
  ];
constructor() {
  
  
}

ngOnInit(): void {
  
}

}

