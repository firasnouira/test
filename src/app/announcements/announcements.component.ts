import {NgModule, Component, OnInit } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;



@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  scrolled = false;
  toggled = false;
 
  constructor( private router:Router, private activR:ActivatedRoute ) {
    
   }

  ngOnInit(): void {
    this.router.navigate(["events"],{relativeTo:this.activR}); 
    $(document).ready(function(){
      alert('I am Called From jQuery');
      console.log("jQ works !!!!!!!!!!!!!!!!!!")
      });
      $(document).ready(function () {
        $(".menu-toggle").on("click", function () {
            $(".nav").toggleClass("showing");
            $(".nav ul").toggleClass("showing");
        });

        $(".post-wrapper").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            nextArrow: $(".next"),
            prevArrow: $(".prev"),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });
   // END JQUERY
  

  }
  


  route(link){
      console.log('event works');
      console.log(link);
      this.router.navigate([link],{relativeTo:this.activR}); 
  }


  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"}
  ];
  
 

   
 
}


