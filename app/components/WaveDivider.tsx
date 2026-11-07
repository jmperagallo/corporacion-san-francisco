// app/components/WaveDivider.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WaveDivider({ flip = false }: { flip?: boolean }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div 
      ref={ref} 
      className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} -mb-1`}
    >
      <motion.svg
        style={{ x }}
        className="relative block w-[110%] h-[60px] md:h-[100px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"
          fill="#A95035"
          opacity="0.3"
        />
        <path
          d="M0,80 C250,30 450,110 700,50 C900,10 1050,80 1200,60 L1200,120 L0,120 Z"
          fill="#59382F"
        />
      </motion.svg>
    </div>
  );
}