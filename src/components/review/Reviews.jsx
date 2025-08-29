import ReviewDemo from './ReviewDemo';
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section className="relative bg-black mt-40">
      <motion.h2
        custom={1}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center w-full"
      >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
          Sincere words from incredible people
          </span>
      </motion.h2>

      <ReviewDemo />
    </section>
  );
};
export default Reviews;
