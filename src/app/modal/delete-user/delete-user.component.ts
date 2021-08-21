import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matdialog : MatDialogRef<DeleteUserComponent>,
  ) { }

  ngOnInit() {
    console.log(this.data);
  }

  deleteUser(type) {
    switch(type){
      case true: {
        this.matdialog.close(this.data);
        break;
      }
      case false : {
        this.matdialog.close();
      }
    }
  }

}
