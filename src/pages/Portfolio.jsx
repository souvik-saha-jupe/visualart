import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { GrClose } from "react-icons/gr";
import { filterCategories } from "../data";
import Lightbox from "yet-another-react-lightbox";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Cta from "../components/Cta";
import "yet-another-react-lightbox/styles.css";
import { portfolioImages } from "../data";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("travel"); // Default to the first category

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages = portfolioImages.filter(
    (image) => image.category === selectedCategory
  );

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Souvik Saha Photography | Portfolio</title>
        <meta
          name="description"
          content="Welcome to the Portfolio of Souvik Saha. Explore the world of unseen landscapes, star trails & much more.... "
        />
      </Helmet>
      <Navbar />
      <main>
        <div className="flex justify-between gap-y-20 gap-x-20 mb-[50px] flex-wrap pl-10 pr-10">
          <h2>Search by category</h2>
          <div className="flex flex-wrap gap-y-2 gap-x-1">
            {filterCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleFilterClick(category)}
                className={`px-3 py-1 capitalize ${
                  selectedCategory === category ? "active" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <section className="flex justify-center">
          <div className="wrapper w-full max-w-7xl flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {filteredImages.map((img, index) => (
                  <div
                    className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border-2 border-black flex justify-center items-center bg-white cursor-pointer group overflow-hidden"
                    key={index}
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      loading="lazy"
                      src={img.path}
                      alt=""
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {open && (
            <Lightbox
              render={{
                iconPrev: () => <LiaAngleLeftSolid size={40} />,
                iconNext: () => <LiaAngleRightSolid size={40} />,
                iconClose: () => <GrClose size={32} />,
              }}
              styles={{
                container: { backgroundColor: "rgba(0, 0, 0, .85)" },
                slide: { cursor: "grab" },
              }}
              open={open}
              close={() => setOpen(false)}
              slides={filteredImages.map((image) => ({ src: image.path }))}
              index={currentImageIndex}
            />
          )}
        </section>
        <Cta />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
