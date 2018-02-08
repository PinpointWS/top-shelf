import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    name:string = '';
    email:string = '';
    message:string = '';
    emailSent:boolean = false;
    emailFailed:boolean = false;
  
constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  
      
  submitForm() {
      
      let params = {
              "contact_form":[{"target_id":"feedback"}],
              "name":[{"value":this.name}],
              "mail":[{"value":this.email}],
              "subject":[{"value":"email from TopShelf Band Website"}],
              "message":[{"value":this.message}]
          }
      
      this.http.post('http://104.197.162.156/contact_message?_format=json', params).subscribe(
          data => {
              this.emailFailed = false;
              this.emailSent = true;            
          }, 
          err => {
              this.emailSent = false;  
              this.emailFailed = true;              
          });
   }
}
