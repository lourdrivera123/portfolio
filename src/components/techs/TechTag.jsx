import { MagicCard } from '@/components/ui/magic-card';

const TechTag = ({ gradientColor, title }) => {
  return (
    <MagicCard
      className="flex w-fit cursor-pointer items-center justify-center bg-zinc-100 dark:bg-zinc-800 px-4 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 border-2 border-transparent"
      gradientColor={gradientColor}
      gradientSize={120}
    >
      <p className="text-sm font-bold text-zinc-800 dark:text-zinc-200 whitespace-nowrap relative z-20">{title}</p>
    </MagicCard>
  );
};
export default TechTag;
