// import React from 'react'
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}
const Carousel = ({items, initialScroll}: CarouselProps) => {
  // const [selectedItem, selectItem] = useState(1)
  const carouselButton = (index: number) => {
    // useState(selectItem(index))
  }
  const cards = ""

  return (
    <section className=" py-40">
      <div className=" min-w-[100vh] overflow-hidden">
        <div className="w-[300vw] flex" >
          {items}
        </div>
      </div>
      <div className="flex items-end justify-end gap-4 p-4">
        <button>
          <FaArrowLeft color="white"/>
        </button>
        <button >
          <FaArrowRight  color="white"/>
        </button>
      </div>
    </section>
  )
}

export default Carousel

export const Cards = ( {card, index, className} : {card: Card, index:number, className: string} ) => {
  
  return (
      <div className={`w-[30vw] px-4 border-2 border-solid bg-gray-400`}> 
        <div> {card.img} </div>
        <div> {card.title} </div>
        <div> {card.description} </div>
      </div>
  )
}

type Card = {
  id: number,
  title?: string,
  img?: string,
  description?: string
}