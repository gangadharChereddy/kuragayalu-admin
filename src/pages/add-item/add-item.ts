import { Camera,CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage,ActionSheetController,ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  base64Image:string="";
  isImageUploaded:boolean=false;

  constructor(private db:AngularFireDatabase,private actionSheetCtrl:ActionSheetController,
    private camera:Camera,private viewCtrl:ViewController) {
  }

  onCancel(){
    this.viewCtrl.dismiss();
  }

  onAddItem(item)  {
    this.db.list('items').push({
    category:item.category,
    details:{
      name : item.name,
      pricePerKG:item.price,
      img:this.base64Image
    }
   });
   this.onCancel();
  }

  onAddItemImage(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  
  takePicture(source){
    let options: CameraOptions = {
       quality: 100,
       allowEdit:true,
       sourceType :source,
       destinationType: this.camera.DestinationType.DATA_URL,
       encodingType: this.camera.EncodingType.JPEG,
       mediaType: this.camera.MediaType.PICTURE
     }
     this.camera.getPicture(options).then((imageData) => {
       this.base64Image = 'data:image/jpeg;base64,' + imageData;
       this.isImageUploaded=true;
      }, (err) => {
       console.log(err)
      });
   
   }
  
}
