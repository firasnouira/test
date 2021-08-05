import {NgModule, Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  showNotification: boolean;  
  hover: boolean = false;
  test = 'test'
 
  
  openNotification(state: boolean) {
  this.showNotification = state
}

  constructor(private toastr: ToastrService) { 

  }

  ngOnInit(): void {
  }

}