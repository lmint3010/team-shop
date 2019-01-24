import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import './Carousel.css';

const items = [
  {
    src: 'http://embryo.theironnetwork.org/assets/images/home2-slider-4.jpg',
    title: 'Hàng Mới Về',
    caption: '50% off'
  },
  {
    src: 'http://embryo.theironnetwork.org/assets/images/home2-slider-1.jpg',
    title: 'Hàng Thanh Lý',
    caption: '70% off'
  },
  {
    src: 'http://embryo.theironnetwork.org/assets/images/home2-slider-2.jpg',
    title: 'Hàng Tồn Kho',
    caption: '0% off'
  }
];

class CarouselComp extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem   
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className = "box"
        >
          <img style = {slideStyle}  src={item.src} alt="" />
          <CarouselCaption className="caption" captionText={item.caption} captionHeader={item.title} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        className="carousel-custom"
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

const slideStyle = {
    margin: "3rem 1rem",
    boxShadow: "0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",
    borderRadius: "10px",
    width: "615px"
}


export default CarouselComp;