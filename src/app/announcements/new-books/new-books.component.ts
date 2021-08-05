import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-new-books',
  templateUrl: './new-books.component.html',
  styleUrls: ['./new-books.component.css']
})
export class NewBooksComponent implements OnInit {

  scrolled = false
  constructor() { }

  ngOnInit(): void {
    this.scrolled= true;
       $(document).ready(function () {

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

}
