import artWorks from "../../data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";

export default function ImageGallery() {
  return (
    <div className="Image-gallery">
      <div className="container">
        <div className="Image-gallery-wrapper">
          <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 768: 3 }}>
            <Masonry gutter="10px">
              {artWorks.map((work) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  key={work.id}
                  className="font-tiltNeon text-center"
                >
                  <h2 className="text-white my-2 text-xl">{work.name}</h2>
                  <img src={work.img} alt={work.name} />
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
}
