import {
  CarouselButtons,
  CarouselContent,
  CarouselItem,
  CarouselScrollbar,
  Carousel as VibeCarousel,
} from '@current-vibe/primitives/carousel';
import { clsx } from 'clsx';
import React from 'react';

import BlockRouter from '../../components/block-router';
import { IBlockCarouselData, IBlockProps, IBox } from '../../types';

export interface ICarouselProps extends IBlockProps<IBox & IBlockCarouselData> {}

const Carousel: React.FC<ICarouselProps> = (props) => {
  const {
    context,
    block: {
      data: { blocks, showButtons, showScrollbar },
    },
  } = props;

  console.log('showScrollbar', props);

  return (
    <VibeCarousel hideOverflow={true}>
      <CarouselContent className="mb-10">
        {blocks.map((block) => (
          <CarouselItem className="self-start w-full" key={block.id}>
            <BlockRouter block={block} context={context} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {(showButtons || showScrollbar) && (
        <div className="mt-10 flex w-full items-center justify-between gap-8">
          <CarouselScrollbar className={clsx(!showScrollbar && 'pointer-events-none invisible')} />
          <CarouselButtons className={clsx(!showButtons && 'pointer-events-none invisible')} />
        </div>
      )}
    </VibeCarousel>
  );
};

export default Carousel;
