import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { dbItems, plItems, libraryItems, otherItems, knowledgableItems } from '@/data';


const TechnicalSkills = () => {
  console.log("dbItems: " + dbItems)
    const items = [
        {
          title: "Database",
          data: dbItems,
          // header: <Skeleton />,
          // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "Programming Language",
          data: plItems,
          // header: <Skeleton />,
          // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "Libraries",
          data: libraryItems,
          // header: <Skeleton />,
          // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "Knowledgeable",
          data: knowledgableItems,
          // header: <Skeleton />,
          // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "Others",
          data: otherItems,
          // header: <Skeleton />,
          // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        },
    ];
  return (
    <div id="techSkills" className='dark'>
        <img 
          src='https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className='absolute opacity-20 md:w-[81%] md:h-[85%] h-full pt-20 rounded'
        />
        <div className='pb-4 text-left pt-20 md:text-4xl text-2xl dark:text-neutral-200 font-extrabold'>
          Technical Skills
        </div>
        <BentoGrid className="mx-auto w-full">
          {items.map((item, i) => (
              <BentoGridItem
                  key={i}
                  data={item.data}
                  index={i}
                  title={item.title}
                  className={i === 4 ? "md:col-span-2" : ""}
          />
          ))}
        </BentoGrid>
    </div>
  )
}

export default TechnicalSkills
