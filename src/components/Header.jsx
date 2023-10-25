/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Headroom from "react-headroom";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <Headroom downTolerance={1} upTolerance={20}>
      <motion.header
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="Header bg-sky-800/60 z-[1000] w-full"
      >
        <div className="container">
          <div className="Header-wrapper h-24 flex justify-end items-center">
            <div className="Header-socials flex">
              <SocialLinks
                icon={<FaInstagram />}
                url={"https://www.instagram.com/seed_9777/"}
              />
            </div>
          </div>
        </div>
      </motion.header>
    </Headroom>
  );
}

export function SocialLinks({ icon, marginx, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`text-4xl ${marginx && "mx-2"}`}
    >
      {icon}
    </a>
  );
}
