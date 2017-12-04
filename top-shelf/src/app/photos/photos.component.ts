import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

    private imageName:string = "assets/img/band4.jpg";
  constructor() { }

  ngOnInit() {
  }
  
  setImageName(imageName:string){
      this.imageName = imageName;      
  }

}
