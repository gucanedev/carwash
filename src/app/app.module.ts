import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HeadermenuComponent } from './components/headermenu/headermenu.component';
import { HomeComponent } from './page/home/home.component';
import { LoginpageComponent } from './page/loginpage/loginpage.component';


import { AuthService } from './service/auth.service';

//para firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore'

import { BdfService } from './service/bdf.service';

// import { FirestoreService } from './service/firestore.service';


const firebaseConfig = {
  apiKey: "AIzaSyB2coyQJsGeL_MHl8O4eIvcXq3Ne-BViW4",
  authDomain: "carwash-40639.firebaseapp.com",
  projectId: "carwash-40639",
  storageBucket: "carwash-40639.appspot.com",
  messagingSenderId: "325265313907",
  appId: "1:325265313907:web:411da25a6a5e7c55ae5a06"
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HeadermenuComponent,
    HomeComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideFirestore(() => getFirestore())
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthService, BdfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
