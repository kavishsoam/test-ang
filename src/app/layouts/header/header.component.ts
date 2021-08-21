import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title: string = "Dashboard";      

  constructor(private sideNavService: SideNavService) {

  }

  clickMenu() { 
    this.sideNavService.toggle();
  }
}
