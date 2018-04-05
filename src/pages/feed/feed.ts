import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public user_name: string = "John McLovin";
  public month: string = "Feburary";
  public day: number = 21;
  public year: number = 2017;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
/**
 * public soma_2_nums(num1:number, num2:number): void{
 * alert(num1 + num2);
 * }
 */

  ionViewDidLoad() {
    /*  this.soma_2_nums(10, 20); */
    console.log('ionViewDidLoad FeedPage');
  }

}
