import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { galleryservice } from '../../services/gallerie.service';
/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
  motCle: string="";
  size: number=10;
  currentPage: number=1;
  images:any={hits:[]};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public galleryService: galleryservice) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }
   

  //faire appel a l'api ,des tratitemets cote back-end
  onSearch(){
    
  return this.galleryService.chercher(this.motCle, this.size, this.currentPage)
  .subscribe(data => {
   data.hits.array.foreach(element => {
     
   });(element => {
     
   });(element => {
     
   });
  },
  err =>{
    console.log(err);
  });

  /*
   this.http.get("https://pixabay.com/api/?key=8848035-d96b5188738fefb35f083687e&q="+this.motCle+"&per_page=10&page=1")
   .map(res => res.json())
   .subscribe(data => {
       this.images=data;
   },
   err =>{
     console.log("error");
   });
         */
   }
   doInfinite(infinite){
     ++this.currentPage;

   }
   
   }
   
  