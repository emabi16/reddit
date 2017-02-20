import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import{RedditService} from '../../app/services/reddit.service';
import{DetailsPage} from '../details/details';

@Component({
  selector: 'reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {
 items: any;
 category:any;
 limit:any;
  constructor(public navCtrl: NavController,private redditService:RedditService) {
   this.getDefault();
  }
  ngOnInit(){
    // here the value of the category and limit is bound to the default
    // because it is inisiliazation on the controller
   this.getPosts(this.category,this.limit);

  }
  getDefault(){
    if(localStorage.getItem('category')!=null){
      this.category = localStorage.getItem('category');
    }else{
      this.category = 'sports';
    }
    if(localStorage.getItem('limit')!=null){
      this.limit = localStorage.getItem('limit');
    }else{
      this.limit =10;
    }
  }


  getPosts(category,limit){
    this.redditService.getPosts(category,limit).subscribe(response =>{
     // console.log(response);
     this.items = response.data.children;
    });
  }


  viewItem(item){
  this.navCtrl.push(DetailsPage,{
    item:item
  });
}
//change categories this category and limit is bound to the click category
changeCategory(){
 this.getPosts(this.category,this.limit);

}

}

