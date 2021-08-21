import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { SideNavService } from './side-nav.service';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { MaterialModule } from '../material.module';
import { ModalModule } from '../modal/modal.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MaterialModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    UserListComponent
  ],
  providers:[
  ]
})
export class SharedModule { }
