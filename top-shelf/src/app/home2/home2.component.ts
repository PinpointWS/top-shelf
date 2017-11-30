import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){  
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";

        if (d.getElementById(id)){
          //if <script id="facebook-jssdk"> exists
          delete (<any>window).FB;
          fjs.parentNode.replaceChild(js, fjs);
        } else {
          fjs.parentNode.insertBefore(js, fjs);
        }
      }(document, 'script', 'facebook-jssdk'));
    }
}
