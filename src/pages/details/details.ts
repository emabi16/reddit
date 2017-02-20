import { Component } from '@angular/core';

import { NavController ,NavParams} from 'ionic-angular';

@Component({
/*selector: 'details', we remove this because it was bringing a problem*/
  templateUrl: 'details.html'
})
export class DetailsPage {
  /*That is how you access the paramas item */
  item :any;
  constructor(public navCtrl: NavController,public params:NavParams) {
    this.item = params.get('item');
  }

}