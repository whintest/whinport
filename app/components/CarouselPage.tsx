import React from 'react'
import Carousel, { Cards } from './Carousel'


const data = [
    {
      id: 1,
      title: "Carousel 1",
      img: "#",
      description: "Carousel Description 1"
    },
    {
      id: 2,
      title: "Carousel 2",
      img: "#",
      description: "Carousel Description 2"
    },
    {
      id: 3,
      title: "Carousel 3",
      img: "#",
      description: "Carousel Description 3"
    },
    {
      id: 4,
      title: "Carousel 4",
      img: "#",
      description: "Carousel Description 4"
    },
    {
      id: 5,
      title: "Carousel 5",
      img: "#",
      description: "Carousel Description 5"
    },
    {
      id: 6,
      title: "Carousel 6",
      img: "#",
      description: "Carousel Description 6"
    },
  ]

const CarouselPage = () => {
    const cards = data.map((card, index) => (
        <Cards card={card} index={index} className='' />
      ));

  return (
    <div>
        <Carousel items={cards} />
    </div>
  )
}

export default CarouselPage

