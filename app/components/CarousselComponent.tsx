"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

export const CarousselComponent = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <>
      <div className="embla mx-auto" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide1</div>
          <div className="embla__slide">Slide2</div>
          <div className="embla__slide">Slide3</div>
        </div>
        <button className="embla__prev" onClick={scrollPrev}>
          {" "}
          Prev{" "}
        </button>{" "}
        <button className="embla__next" onClick={scrollNext}>
          {" "}
          Next{" "}
        </button>
      </div>
    </>
  );
};
