import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

    private imageName:string = "assets/img/band4.jpg";
    private imagesList:string[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://104.197.162.156/band_gallery').subscribe(data => {
          // Read the result field from the JSON response.
          console.log("meb", data);
          
          let results:any;
          results = data;
          for(let currentImage of results){
          
       //   console.log("meb", data);
          console.log("meb", currentImage.field_band_image[0].url);
              let imageURl:string = currentImage.field_band_image[0].url;
              this.imagesList.push(imageURl);
       
    
          }

        });
  }
  
  setImageName(imageName:string){
      this.imageName = imageName;      
  }

}
