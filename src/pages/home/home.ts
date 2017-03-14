import { Component }      from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { ChecklistPage }  from '..checklist/checklist';
import { ChecklistModel } from '../../models/checklist-model';
import { Data }           from '../../providers/data';
import { Keyboard }       from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  checklists: ChecklistModel[] = [];

  constructor(public nav: NavController, public dataService: Data, public alertCtrl: AlertController,
      public platform: Platform) {
    
  }
  
  ionViewDidLoad() {}

  addCheckList(): void {

    let prompt = this.alertCtrl.create({

      title: 'New Checklist',
      message: 'Enter the name of your new checklist below:',
      inputs: [{

        name: 'name'

      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {

            let newChecklist = new ChecklistModel(data.name, []);

            this.checklists.push(newChecklist);

            newChecklist.checkListUpdates().subscribe(update => {

              this.save();

            });

            this.save();

          }
        }
      ],

    });

    prompt.present();

  }

  renameChecklist(checklist): void {}

  viewChecklist(checklist): void {}

  removeChecklist(checklist): void {}

  save(): void {}

}
