import artWorks from "../../data";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ImageGallery() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = () => {
    const itemsPerPage = 5;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const newItems = artWorks.slice(startIndex, endIndex);

    setItems([...items, ...newItems]);
    setPage(page + 1);

    if (items.length >= artWorks.length) {
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="Image-gallery" id="works-section">
      <div className="container">
        <div className="Image-gallery-wrapper">
          <InfiniteScroll
            dataLength={items.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 500: 1, 640: 2, 768: 3 }}
            >
              <Masonry gutter="20px">
                {items.map((work) => (
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
          </InfiniteScroll>
        </div>
      </div>
    </section>
  );
}
