import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    (function ($) {
      $(document).ready(function(){
        console.log("Hello from jQuery!");
      });
    })(jQuery);

    

  }


  myInterval = 1500;
  activeSlideIndex = 0;
 
  slides = [
    {image: 'assets/web/img/testimonial-1.jpg',name:"Jena Karlis",des:"Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam."},
    {image: 'assets/web/img/testimonial-3.jpg',name:"Sara Wilsson",des:"Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim"},
    {image: 'assets/web/img/testimonial-3.jpg',name:"Matt Brandon",des:"duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim"}
  ];


  myClientInterval = 1500;
  //activeSlideIndexClient = 0;
  itemsPerSlide = 5;
  singleSlideOffset = true;
  noWrap = true;
 
  Clients = [
    {image: 'assets/web/img/clients/client-1.png'},
    {image: 'assets/web/img/clients/client-2.png'},
    {image: 'assets/web/img/clients/client-3.png'},
    {image: 'assets/web/img/clients/client-4.png'},
    {image: 'assets/web/img/clients/client-5.png'},
    {image: 'assets/web/img/clients/client-6.png'},
    {image: 'assets/web/img/clients/client-7.png'},
    {image: 'assets/web/img/clients/client-8.png'}
  
  ];


 
  

}

