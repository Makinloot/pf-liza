import artWorks from "../../data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ImageGallery() {
  return (
    <section className="Image-gallery" id="works-section">
      <div className="container">
        <div className="Image-gallery-wrapper">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 500: 1, 640: 2, 768: 3 }}
          >
            <Masonry gutter="20px">
              {artWorks.map((work) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={work.id}
                  className="text-center my-8 sm:my-0"
                >
                  <h2 className="my-2 text-xl">{work.name}</h2>
                  <Zoom>
                    <img
                      src={work.img}
                      alt={work.name}
                      className="rounded-lg"
                    />
                  </Zoom>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  );
}
