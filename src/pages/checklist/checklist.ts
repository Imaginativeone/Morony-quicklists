import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Checklist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html'
})

export class ChecklistPage {

  checklist: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.checklist = this.navParams.get('checklist');

  }

  addItem():        void {

    let prompt = this.alertCtrl.create({

      title: 'Add Item',
      message: 'Enter the name of the task for this checklist below:',
      inputs: [
        {
          name: 'name'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {

            this.checklist.addItem(data.name);

          }
        }
      ]
    });

    prompt.present();

  }

  toggleItem(item): void {}
  removeItem(item): void {}
  
  // Current Development
  renameItem(item): void {}
  uncheckItems():   void {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChecklistPage');
  }

}
