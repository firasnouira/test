import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {MatDialogModule} from "@angular/material/dialog";


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnnouncementsService } from './services/announcements.service';

import { ToastrModule } from 'ngx-toastr';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { NotificationComponent } from './notification/notification.component';
import { FirebaseTestComponent } from './firebase-test/firebase-test.component';
import { EventsComponent } from './announcements/events/events.component';
import { NewBooksComponent } from './announcements/new-books/new-books.component';
import { MatdialogComponent } from './announcements/matdialog/matdialog.component';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AnnouncementsComponent,
    NotificationComponent,
    FirebaseTestComponent,
    EventsComponent,
    NewBooksComponent,
    MatdialogComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    AngularFireModule.initializeApp({ apiKey: "AIzaSyAV3g70l5VVr7chNQFt9VO49RCaeEyg0Es",
    authDomain: "dashboard-auth-db9ca.firebaseapp.com",
    databaseURL: "https://dashboard-auth-db9ca-default-rtdb.firebaseio.com",
    projectId: "dashboard-auth-db9ca",
    storageBucket: "dashboard-auth-db9ca.appspot.com",
    messagingSenderId: "254031590722",
    appId: "1:254031590722:web:a098a81aee9060db57c4db"
  }),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    
    
    
  ],
  providers: [AnnouncementsService],
  bootstrap: [AppComponent],
  entryComponents: [MatdialogComponent]
})
export class AppModule { }
