import { UpdateItemPage } from './../pages/update-item/update-item';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AddItemPage } from '../pages/add-item/add-item';

export const firebaseConfig = {
  apiKey: "AIzaSyAhSzUeEQTGBpvZ1Y-AGOf3o0O3qsgqGvk",
  authDomain: "market-sujan.firebaseapp.com",
  databaseURL: "https://market-sujan.firebaseio.com",
  projectId: "market-sujan",
  storageBucket: "",
  messagingSenderId: "665538611958"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    UpdateItemPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    UpdateItemPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
