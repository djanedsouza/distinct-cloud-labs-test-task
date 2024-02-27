import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-items',
  templateUrl: './more-items.component.html',
  styleUrls: ['./more-items.component.scss'],
})
export class MoreItemsComponent implements OnInit {
  swiperConfig = {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      loop: true,
      speed: 500,
      autoplay: true,
      navigation: true,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      autoplay: true,
      loop: true,
      speed: 1000,
      navigation: true,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      autoplay: false,
      loop: false,
    },
  };

  constructor() {}

  ngOnInit() {}
}
