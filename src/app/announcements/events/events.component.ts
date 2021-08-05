import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { AnnouncementsService } from 'src/app/services/announcements.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatdialogComponent,} from '../matdialog/matdialog.component';

import { data } from 'jquery';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    announcements: any;
    constructor(private announcementService: AnnouncementsService, private matDialog: MatDialog) { }

    ngOnInit(): void {
        this.getAllAnnouncements();
       

    }
    getAllAnnouncements() {
        this.announcementService.getAnnouncements().snapshotChanges().pipe(map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))).subscribe(rs => {
            console.log(rs);
            this.announcements = rs;
            console.log(this.announcements)
        })
    }
    openDialog(index : any) {
       const dialogconfig = new MatDialogConfig();
       dialogconfig.width = "90%";
       dialogconfig.data = {
           data : index,
           x : 'test'
       }
      this.matDialog.open(MatdialogComponent,  dialogconfig, /* { data: {data: index}} */ ) ;
      console.log(index);
      console.log(data)
    }
}

