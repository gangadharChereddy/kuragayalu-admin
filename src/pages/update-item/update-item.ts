import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage,NavParams,ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-update-item',
  templateUrl: 'update-item.html',
})
export class UpdateItemPage {

  olditem:any={};

  constructor(private viewCtrl:ViewController,private navParams:NavParams,private db:AngularFireDatabase) {
    this.olditem=this.navParams.data;
  }

  onCancel(){
    this.viewCtrl.dismiss();
  }

  onUpdateItem(updateditem){
     this.db.object('/items/'+this.navParams.data.key).update({
       category:updateditem.category,
       details:{
         name:updateditem.name,
         pricePerKG:updateditem.price,
         img:this.navParams.data.payload.val().details.img
       }
 
     });
    this.onCancel();
   }

}
