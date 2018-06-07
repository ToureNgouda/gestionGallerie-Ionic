import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class galleryservice{
  public host:string="https://pixabay.com/api/";

    constructor(private http: Http){

    }

    chercher(query: string, size: number, page: number){
     return this.http.get(this.host+"?key=8848035-d96b5188738fefb35f083687e&q="+query+"&per_page="+size+"&page="+page)
      .map(res =>res.json());
      }
      
      
      }
      
  