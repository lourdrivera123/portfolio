import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { MagicCard } from '@/components/ui/magic-card';

const ReviewCard = React.memo(function ReviewCard({
  img,
  name,
  username,
  body,
  bgGradientColor,
}) {
  return (
    <MagicCard
      className="cursor-pointer border-none bg-background text-white"
      gradientColor={bgGradientColor}
      gradientOpacity={0.2}
    >
      <figure
        className={cn(
          'relative w-[650px] cursor-pointer overflow-hidden rounded-xl p-6',
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 line-clamp-3 text-base text-silverchalice">
          {body}
        </blockquote>
      </figure>
    </MagicCard>
  );
});
export default ReviewCard;
