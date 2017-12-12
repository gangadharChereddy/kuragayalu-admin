import { UpdateItemPage } from './../update-item/update-item';
import { AddItemPage } from './../add-item/add-item';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items$: Observable<any[]>;

  constructor(private db:AngularFireDatabase,private modalCtrl:ModalController) {

  }

  ionViewDidLoad(){
    this.items$=  this.db.list('items').snapshotChanges();
  }

  onAddItem(){
    this.modalCtrl.create(AddItemPage).present();
  }

  onDeleteItem(item){  
    this.db.object('/items/'+item.key).remove();   
   }

   onUpdateItem(item){ 
    this.modalCtrl.create(UpdateItemPage,item).present();  
   }  

   onChange(category){
    this.items$=  this.db.list('items',ref => ref.orderByChild('category').equalTo(category)).snapshotChanges();
   }

}
