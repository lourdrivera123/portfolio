import { MagicCard } from '@/components/ui/magic-card';

const TechTag = ({
  gradientColor,
  title,
}: {
  gradientColor: string;
  title: string;
}) => {
  return (
    <MagicCard
      className="flex w-fit cursor-pointer items-center justify-center border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-3 py-2 rounded-lg"
      gradientColor={gradientColor}
      gradientOpacity={0.25}
    >
      <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{title}</p>
    </MagicCard>
  );
};
export default TechTag;
