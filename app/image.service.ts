import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()

export class imageService{
    constructor(private http:HttpClient){}

    getGalleryImages(){
    return this.http.get('https://api.myjson.com/bins/94iag');
    }

    RemoveOrAddGalleryImage(arr){
        return this.http.put('https://api.myjson.com/bins/94iag', arr);
    }

    getTestimonials(){
        return this.http.get('https://api.myjson.com/bins/1e9rwo');
    }

    RemoveOrAddTestimonial(arr){
        return this.http.put('https://api.myjson.com/bins/1e9rwo',arr);
    }

}
