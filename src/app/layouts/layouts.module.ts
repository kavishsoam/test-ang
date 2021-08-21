import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
// import { SideNavService } from './side-nav.service';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { LayoutsComponent } from './layouts.component';
import { SideNavService } from './sidenav.service';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    HeaderComponent,
    DrawerComponent,
    LayoutsComponent,
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    DrawerComponent,
    LayoutsComponent,
  ],
  providers:[
    SideNavService,
  ]
})
export class LayoutsModule { }
