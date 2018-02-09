import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ScorePage } from '../pages/score/score';
import { GamemodePage } from '../pages/gamemode/gamemode';


import { GamePage } from '../pages/game/game';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = GamePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToGame(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GamePage);
  }goToScore(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ScorePage);
  }goToGamemode(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GamemodePage);
  }
}
