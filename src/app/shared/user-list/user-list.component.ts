import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { DeleteUserComponent } from 'src/app/modal/delete-user/delete-user.component';
import { EditUserComponent } from 'src/app/modal/edit-user/edit-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  name = 'Angular 5';
  displayedColumns = ['position', 'name', 'email', 'gender','address', 'dob','edit','delete'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  data: any = [];
  constructor(
    private matDialog : MatDialog,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  openModal(type,data){
    this.data = this.dataSource;
    switch(type){
      case 'edit' : {
        const modalRef = this.matDialog.open(EditUserComponent,{
          maxWidth: '60vh',
          width: '60vh',
          height: '60vh',
          data : data
        })
        modalRef.afterClosed().subscribe(res=>{
          console.log(res);
          if(res && res.position){
            this.data.data.forEach(element => {
              if(element.position == res.position){
                element.name = res.name,
                element.email= res.email,
                element.gender = res.gender,
                element.dob = res.dob,
                element.position = res.position,
                element.address = res.address
              }
            });
          }
        })
        break
      }
      case 'delete' : {
        const modalRef = this.matDialog.open(DeleteUserComponent,{
          maxWidth: '60vh',
          width: '60vh',
          data : data
        })
        modalRef.afterClosed().subscribe(res=>{
          if(res && res.position){
            this.data.data.filter(element => element.position != res.position);
          }
          this.changeDetectorRefs.detectChanges();
        })
        break
      }

    }
  }

}

export interface Element {
  name: string;
  position: number;
  email: string;
  gender: string;
  address : string;
  dob : string;
  edit: string;
  delete : string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'sew joen', email: 'abc@gmail.com', gender: 'male', address : 'dfsdf',dob : '123',edit: '', delete : ''},
  {position: 2, name: 'John Doe', email: 'abc@gmail.com', gender: 'male',address : 'sdfsd',dob : '324',edit: '', delete : ''},
  {position: 3, name: 'Rose smith', email: 'abc@gmail.com', gender: 'female',address : 'yutrh',dob : '12',edit: '', delete : ''},
  {position: 4, name: 'droid crew', email: 'abc@gmail.com', gender: 'male',address : 'regervfd',dob : '345',edit: '', delete : ''},
  {position: 5, name: 'Deos rose', email: 'abc@gmail.com', gender: 'male',address : 'scafdq',dob : '34',edit: '', delete : ''},
  {position: 6, name: 'Carbon', email: 'abc@gmail.com', gender: 'female',address : 'sfdsdd',dob : '5',edit: '', delete : ''},
  {position: 7, name: 'Nitrogen', email: 'abc@gmail.com', gender: 'male',address : 'qwqwqw',dob : '56',edit: '', delete : ''},
  {position: 8, name: 'Oxygen', email: 'abc@gmail.com', gender: 'male',address : 'asasasa',dob : '67',edit: '', delete : ''}
];