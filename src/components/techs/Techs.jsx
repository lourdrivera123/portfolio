import { slugs, techs } from '@/constants/skills';
import IconCloud from '../ui/icon-cloud';
import TechTag from './TechTag';
import { motion } from "framer-motion";

const Techs = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="relative">
        <div className="flex flex-col items-center justify-center gap-8 rounded-lg bg-none">
          <motion.h2
            custom={1}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center w-full"
          >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                Skills
              </span>
          </motion.h2>
          
          <div className="flex flex-wrap gap-x-3 gap-y-2 md:max-w-[600px] md:items-center md:justify-center ">
            {techs.map((tech) => (
              <TechTag
                key={tech.label}
                title={tech.label}
                gradientColor={tech.bgColor}
              />
            ))}
          </div>

          <div>
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Techs;
