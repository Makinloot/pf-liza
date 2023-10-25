import artWorks from "../../data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
                  animate={{ opacity: 1 }}
                  key={work.id}
                  className="test font-tiltNeon text-center"
                >
                  <h2 className="my-2 text-xl">{work.name}</h2>
                  <Zoom>
                    <img src={work.img} alt={work.name} />
                  </Zoom>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
}
