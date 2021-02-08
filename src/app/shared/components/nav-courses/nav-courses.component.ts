import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/core/services/utils.service';
import { Link } from '../../../core/models/link.model';
@Component({
  selector: 'app-nav-courses',
  templateUrl: './nav-courses.component.html',
  styleUrls: ['./nav-courses.component.scss'],
})
export class NavCoursesComponent implements OnInit {
  chapters: Link[];
  menuVisible = false;

  constructor(private utilsService: UtilsService) {}

  ngOnInit(): void {}

  activeSidebar(event) {
    this.menuVisible = !this.menuVisible;
    this.utilsService.sendStatusSidebar(this.menuVisible);
  }
}
