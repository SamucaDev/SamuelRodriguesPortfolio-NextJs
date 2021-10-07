import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SliderSlick extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="/assets/img/projects/menuboard/1595423578331.jpeg"></img>
          </div>
          <div>
            <img src="/assets/img/projects/menuboard/1597204371941.jpeg"></img>
          </div>
          <div>
            <img src="/assets/img/projects/menuboard/1602186759334.jpeg"></img>
          </div>
          <div>
            <img src="/assets/img/projects/menuboard/1612278573475.jpeg"></img>
          </div>
          <div>
            <img src="/assets/img/projects/menuboard/1612278710034.jpeg"></img>
          </div>
          <div>
            <img src="/assets/img/projects/menuboard/1612279063011.jpeg"></img>
          </div>
        </Slider>
      </div>
    );
  }
}
