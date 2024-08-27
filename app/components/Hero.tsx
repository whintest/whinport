import React from 'react'
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { LampContainer } from './ui/lamp';
import { SparklesCore } from './ui/sparkles';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { TypewriterEffectSmooth, TypewriterEffect } from './ui/typewriter-effect';
import { Spotlight } from './ui/Spotlight';
// import { items } from '@/data/grid-data.ts'

const Hero = () => {

    return (
        <section className='absolute h-auto px-0'>            
            <div className='flex justify-left items-left py-8 w-full'>
                <TextGenerateEffect
                    words={`
                        do{
                            questioning;
                            listening;
                            learning;
                            watching;
                            reading;
                            ...
                        }
                        while(CHANGE is CONSTANT):`}
                    className="text-lg w-[60%] flex justify-center items-center whitespace-pre tracking-tight"
                    duration={0.2}
                />
            </div>                      
        </section>
    )
}

export default Hero
