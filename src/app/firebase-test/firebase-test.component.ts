import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Announcement } from '../models/announcementsModel';
import { AnnouncementsService } from '../services/announcements.service';

@Component({
  selector: 'app-firebase-test',
  templateUrl: './firebase-test.component.html',
  styleUrls: ['./firebase-test.component.css']
})
export class FirebaseTestComponent implements OnInit {
  addAnnouncement: FormGroup;
  announcement = new Announcement()
  

  constructor(private announcementService:AnnouncementsService ) { 
    this.addAnnouncement = new FormGroup({
      "title" : new FormControl(null, [Validators.required ]),
      "content" : new FormControl(null, [Validators.required ]),
      "photo" : new FormControl(null, [Validators.required ]),
      "date" : new FormControl(null, [Validators.required ]),
    })
   }

  ngOnInit(): void {
  }
  onSubmit() {
    this.announcement.title = this.addAnnouncement.value.title;
    this.announcement.content = this.addAnnouncement.value.content;
    this.announcement.photo = this.addAnnouncement.value.photo;
    this.announcement.date = this.addAnnouncement.value.date;
    this.announcementService.createAnnouncement(this.announcement).then(res=>{console.log(res);
    }).catch(err=>{console.log(err);})

  }
}
