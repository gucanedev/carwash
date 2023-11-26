import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

//para firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore'

import { BdfService } from './service/bdf.service';
import { AuthService } from './service/auth.service';
import { WaitlistService } from './service/waitlist.service';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HeadermenuComponent } from './components/headermenu/headermenu.component';
import { HomeComponent } from './page/home/home.component';
import { LoginpageComponent } from './page/loginpage/loginpage.component';




import { PrimcipalComponent } from './page/primcipal/primcipal.component';
import { WaitinglistComponent } from './components/waitinglist/waitinglist.component';
import { WaitinglistpageComponent } from './page/waitinglistpage/waitinglistpage.component';
import { Waitinglist2Component } from './components/waitinglist2/waitinglist2.component';
import { ListserviceComponent } from './components/listservice/listservice.component';
import { ListservicepageComponent } from './page/listservicepage/listservicepage.component';
import { NewsaleComponent } from './page/newsale/newsale.component';
import { CatalogserviceComponent } from './page/catalogservice/catalogservice.component';
import { CatservdetaolComponent } from './page/catalog/catservdetaol/catservdetaol.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaesperaComponent } from './components/listaespera/listaespera.component';
import { DialogsaleComponent } from './components/dialog/dialogsale/dialogsale.component';



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
    LoginpageComponent,
    PrimcipalComponent,
    WaitinglistComponent,
    WaitinglistpageComponent,
    Waitinglist2Component,
    ListserviceComponent,
    ListservicepageComponent,
    NewsaleComponent,
    CatalogserviceComponent,
    CatservdetaolComponent,
    ListaesperaComponent,
    DialogsaleComponent

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
    MatTableModule,
    MatChipsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatDividerModule,
    MatSelectModule,
    MatRadioModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    // provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // provideFirestore(() => getFirestore())
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,

  ],
  providers: [AuthService, BdfService, WaitlistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
