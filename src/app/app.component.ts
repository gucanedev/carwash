import { Component, OnInit } from '@angular/core';

// import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // firebaseConfig = {
  //   apiKey: "AIzaSyB2coyQJsGeL_MHl8O4eIvcXq3Ne-BViW4",
  //   authDomain: "carwash-40639.firebaseapp.com",
  //   projectId: "carwash-40639",
  //   storageBucket: "carwash-40639.appspot.com",
  //   messagingSenderId: "325265313907",
  //   appId: "1:325265313907:web:411da25a6a5e7c55ae5a06"
  // };

  ngOnInit(): void {
    // const app = initializeApp(this.firebaseConfig);
    const r = "";
  }
  title = 'carwash';
}
