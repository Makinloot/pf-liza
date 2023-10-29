/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import instagram from "/icons/instagram.svg";
import telegram from "/icons/telegram.svg";
import liza from "/liza.jpg";
export default function About() {
  return (
    <div className="About">
      <div className="container">
        <div className="About-wrapper my-20 flex flex-col items-center justify-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="capitalize text-3xl text-center"
          >
            liza agapova
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mt-4 max-w-[450px]"
          >
            <Zoom>
              <img className="w-full rounded-lg" src={liza} alt="Liza" />
            </Zoom>
          </motion.div>
          <span className="mt-2 mb-4 text-lg">Artist</span>
          <div className="About-socials flex gap-2">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SocialLinks
                icon={instagram}
                name={"instagram"}
                url={"https://www.instagram.com/ponicla/reels/"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SocialLinks
                icon={telegram}
                name={"telegram"}
                url={"https://t.me/pertsssh"}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SocialLinks({ icon, name, url }) {
  return (
    <motion.a
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2, color: "#94b0f5" }}
      transition={{ type: "spring", damping: 8 }}
      href={url}
      target="_blank"
      rel="noreferrer"
      className={``}
    >
      <div className="w-11">
        <img className="w-full" src={icon} alt={name} />
      </div>
    </motion.a>
  );
}
