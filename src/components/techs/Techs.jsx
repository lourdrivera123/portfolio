import { slugs as importedSlugs, techs } from '@/constants/skills';
import DynamicIconCloud from '../ui/DynamicIconCloud';
import ErrorBoundary from '../ui/ErrorBoundary';
import TechTag from './TechTag';
import { motion } from "framer-motion";

// Fallback slugs in case import fails
const fallbackSlugs = [
  'typescript', 'javascript', 'react', 'nodejs', 'nextjs'
];

// Robust slugs validation and assignment
let slugs;
try {
  if (importedSlugs && Array.isArray(importedSlugs) && importedSlugs.length > 0) {
    slugs = importedSlugs;
  } else {
    console.warn('Techs: Using fallback slugs, imported slugs invalid:', importedSlugs);
    slugs = fallbackSlugs;
  }
} catch (error) {
  console.error('Techs: Error importing slugs, using fallback:', error);
  slugs = fallbackSlugs;
}

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
            <ErrorBoundary>
              <DynamicIconCloud iconSlugs={slugs} />
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techs;