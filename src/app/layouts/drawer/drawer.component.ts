import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from '../sidenav.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit, AfterViewInit {

  @ViewChild('sidenav') public sidenav!: MatSidenav;

  constructor(private sideNavService: SideNavService) { 
  }

  ngOnInit() { 
   this.sideNavService.sideNavToggleSubject.subscribe(()=> {
      this.sidenav.toggle();
    });
  } 

  ngAfterViewInit() {
    this.sidenav = this.sidenav
    console.log(this.sidenav);
  }

}
