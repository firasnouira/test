import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MAT_DIALOG_DATA, MatDialogRef,} from '@angular/material/dialog';



@Component({
  selector: 'app-matdialog',
  templateUrl: './matdialog.component.html',
  styleUrls: ['./matdialog.component.css']
})
export class MatdialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {data : any}) { }
  

  ngOnInit(): void {
    console.log(this.data)
  }

}
