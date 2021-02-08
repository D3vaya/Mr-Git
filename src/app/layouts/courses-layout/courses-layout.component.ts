import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-courses-layout',
  templateUrl: './courses-layout.component.html',
  styleUrls: ['./courses-layout.component.scss'],
})
export class CoursesLayoutComponent implements OnInit {
  activeSidebar: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  showSidebar(event: boolean) {
    this.activeSidebar = event;
    console.log(event);
  }
}
