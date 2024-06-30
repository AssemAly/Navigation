import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  // @Input() data: { name: string; age: number; job: string; employed: boolean; }[] = [];
  // @Input() headers: { key: string; label: string; }[] = [];

  @Input() data: any[] = [];
  @Input() headers: any[] = [];

  constructor() {}
  ngOnInit() {}
}
