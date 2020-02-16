import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-slides',
  templateUrl: './main-slides.component.html',
  styleUrls: ['./main-slides.component.scss'],
})
export class MainSlidesComponent implements OnInit {

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };



  slides = [
    {
      title: 'Ofertas de San Valentin',
      img: '1.png'
    },
    {
      title: 'Ofertas de San Valentin',
      img: '2.png'
    }
  ];

  constructor() { }

  ngOnInit() { }

}
