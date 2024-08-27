"use client";
import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import { Parallax } from "react-parallax";

export function Experience() {
  const cards = data.map((card, index) => (
    <Card card={card} key={card.src} index={index} />
  ));

  return (
    <div id="experience" className="dark w-full h-full dark:text-neutral-200 pt-20">
      <div className="md:absolute max-w-7xl pl-4 pt-4 mx-auto text-2xl md:text-4xl font-bold text-neutral-800 font-sans dark:text-neutral-200">
        Work Experience
      </div>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Easycom Japan Philippines Inc",
    title: "Full Stack Developer",
    src: "https://th.bing.com/th/id/OIP.zwA5MLMPZLHHjdwjwyllSwAAAA?rs=1&pid=ImgDetMain",
    content: "March 2024 - Present",
  },
  {
    category: "ELGADA BPO Solutions Inc",
    title: "Full Stack Developer",
    src: "https://rec-data.kalibrr.com/www.kalibrr.com/logos/27S4M6Y9VDBCD8EE8C6RQT2YK3KMPDYT67XV2DEF-62d51858.png",
    content: "June 2023 - November 2023",
  },
  {
    category: "NovaSolutions Philippines Inc",
    title: "Programmer",
    src: "https://mtjprofile.sgp1.cdn.digitaloceanspaces.com/employer/logo/2290_1500282332_2",
    content: "July 2021 - June 2023",
  },

  {
    category: "Tsukiden Global Solutions Inc.",
    title: "Design Engineer 1",
    src: "https://assets.bossjob.com/companies/8667/logo/ZPr786kL1VvjK90ED7HguW2y3CpTXsuabWYdgTsH.png",
    content: "March 2019 - Aug 2020",
  },
  {
    category: "SPI Global",
    title: "Data Technician",
    src: "https://www.logo-designer.co/storage/2021/04/2021-spi-global-reveals-new-name-logo-design-5.png",
    content: "November 2017 - January 2019",
  },
];
