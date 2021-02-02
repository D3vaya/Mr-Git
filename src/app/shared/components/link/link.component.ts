import { Component, Input, OnInit } from '@angular/core';
import { Link } from '../../../core/models/link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent implements OnInit {
  @Input() params: Link;

  constructor() {}

  ngOnInit(): void {
    console.log('', this.params);
  }
}
