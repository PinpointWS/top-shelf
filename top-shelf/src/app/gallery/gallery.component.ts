import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[]; 
    galleryImages: NgxGalleryImage[] = [];

    constructor(private http: HttpClient) { }

        ngOnInit() {
            this.galleryOptions = [                 
                   {
                       width: '1000px',
                       height: '800px',
                       thumbnailsColumns: 4,
                       imageAnimation: NgxGalleryAnimation.Slide
                   },
                   // max-width 800
                   {
                       breakpoint: 800,
                       width: '100%',
                       height: '600px',
                       imagePercent: 80,
                       thumbnailsPercent: 20,
                       thumbnailsMargin: 20,
                       thumbnailMargin: 20
                   },
                   // max-width 400
                   {
                       breakpoint: 400,
                       preview: false
                   }
              ];
            
            this.http.get('http://104.197.162.156/band_gallery').subscribe(data => {
            // Read the result field from the JSON response.
            console.log("meb", data);
            
            let results:any;
            results = data;
           

            
            
            for(let currentImage of results){
                
                //   console.log("meb", data);
                
                let imageURl:string = currentImage.field_band_image[0].url;                                  
                let galleryImage = {
                    small: imageURl,
                    medium: imageURl,
                    big: imageURl
                };
                this.galleryImages.push(galleryImage);                       
            }
        });
        
    }
    
}
    

