/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Headroom from "react-headroom";

export default function Header() {
  return (
    <Headroom downTolerance={1} upTolerance={15}>
      <header className="Header bg-[#222222b9] z-[1000] w-full">
        <div className="container">
          <div className="Header-wrapper h-24 flex justify-end items-center gap-8">
            <motion.a
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="capitalize text-xl lg:text-2xl hover:text-[#94b0f5]"
              href="#about-section"
            >
              about
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="capitalize text-xl lg:text-2xl hover:text-[#94b0f5]"
              href="#works-section"
            >
              works
            </motion.a>
          </div>
        </div>
      </header>
    </Headroom>
  );
}
