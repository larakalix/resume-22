import { ReactNode } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";

import styles from "./carousel.module.css";

type PropType = {
    options?: EmblaOptionsType;
    slides: ReactNode[];
};

export const EmblaCarousel = ({ options, slides }: PropType) => {
    const [emblaRef] = useEmblaCarousel(options);

    return (
        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {slides.map((slide, index) => (
                    <div className="relative flex flex-none" key={index}>
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
};
