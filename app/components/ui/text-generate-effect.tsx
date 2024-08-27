"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(1),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {idx >= 3 && idx <= 7 
                ? <label className="md:text-2xl text-lg text-[#799351]">
                    {word}{" "}
                  </label> 
                : idx >= 11 && idx <= 13
                  ? <label className="md:text-2xl text-lg text-[#EE4E4E]">
                    {word}{" "}
                    </label>
                  : word + " "
               }
              {/* {word}{" "} */}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
        <div className={`font-bold mt-4 dark:text-white text-black leading-snug tracking-wide ${className}` }>
          {renderWords()}
        </div>
  );
};
