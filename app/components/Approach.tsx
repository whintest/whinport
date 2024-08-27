"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Planning and Designing",
    description: "Planning and designing involves setting clear goals, understanding the target audience, and creating a user-friendly design that meets both business objectives and user needs.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Planning and Designing
      </div>
    ),
  },
  {
    title: "Development",
    description: "Creating, improving, or bringing something into existence. In the context of software or websites, development refers to the process of building and programming the functionalities, features, and structure of an application or website. This includes writing code, integrating systems, testing, and refining the product to ensure it works as intended.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <div className="absolute text-center">
            Development
        </div>
        <img
          src="https://static3.makeuseofimages.com/wordpress/wp-content/uploads/2010/10/HTML-Code-Examples-Featured.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Testing",
    description: "Evaluating a system, application, or website to identify and fix bugs, errors, and other issues. It ensures that the product functions correctly, meets requirements, and provides a good user experience. Testing can involve various methods, such as unit testing, integration testing, usability testing, and performance testing, to validate different aspects of the product before its final release.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Testing
      </div>
    ),
  },
  {
    title: "Deployment",
    description:
      "Deployment is the process of making a software application, website, or system available for use in a live environment. This involves moving the product from a development or testing environment to production, where it becomes accessible to users. Deployment includes tasks such as configuring servers, setting up databases, and ensuring all components work correctly in the new environment. It often requires careful planning to minimize downtime and ensure a smooth transition.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Deployment
      </div>
    ),
  },
];
export function Approach() {
  return (
    <section id="approach" className="dark py-20">
        <div className="dark:text-neutral-200 p-10 text-center">
        <h2 className="max-w-7xl pl-4 mx-auto text-2xl md:text-4xl font-bold text-neutral-800 font-sans dark:text-neutral-200">
            My Approach
          </h2>  
        </div>
      <StickyScroll content={content} />
    </section>
  );
}
