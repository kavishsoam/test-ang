import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editForm: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matdialog : MatDialogRef<EditUserComponent>,
    private formBuilder : FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      name : '',
      email: '',
      gender : '',
      dob : '',
      address : '',
      position : ''
    })
   }

  ngOnInit() {
    console.log(this.data);
    this.editForm.patchValue({
      name : this.data.name,
      email: this.data.email,
      gender : this.data.gender,
      dob : this.data.dob,
      position : this.data.position,
      address : this.data.address
    })
  }

  editFormData(form) {
    console.log(form);
    this.matdialog.close(form);
  }

  close() {
    this.matdialog.close();
  }
}
