import React from "react";
import { Title } from "../header/Title";
import Slider from "react-slick"
import { Card_lg } from "../header/Card_lg";
import { treading } from "../data/data";




export const Treading = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <section className='treading hero'>
        <Title title='Treading' />
        <Slider {...settings}>
          {treading.map((item, i) => (
            <div className='box card hero m-5' key={i}>
              <div className='mr-5'>
                <Card_lg cover={item.cover} name={item.name} tag={item.tag} />
              </div>
            </div>
          ))}
        </Slider>
      </section>
    )
  }

