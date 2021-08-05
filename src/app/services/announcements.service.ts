import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { promise } from 'selenium-webdriver';
import { Announcement } from '../models/announcementsModel';

@Injectable({
  providedIn: 'root'
  

})
export class AnnouncementsService {
  path = "/announcements"
  announcementref: AngularFireList<Announcement>

  constructor(private db: AngularFireDatabase) {  
    this.announcementref = this.db.list(this.path)
  }

  getAnnouncements() :AngularFireList<Announcement> {
    return this.announcementref;
  }

  createAnnouncement(announcement:Announcement): any {
    return this.announcementref.push(announcement)
  }
  deleteAmnouncement(key:string): Promise<any> {
    return this.announcementref.remove(key)
  }





}
