import React, {
    Children, useEffect, useRef, useState, useCallback,
} from 'react';
import styles from './Slider.module.css';

interface SliderTypes {
    children: React.ReactNode;
    activeSlide: number;
    changeActiveSlide: (index: number) => void;
}

const SWIPE_THRESHOLD = 40;

const Slider = React.memo(({ children, activeSlide, changeActiveSlide }: SliderTypes) => {
    const [startX, setStartX] = useState<number | null>(null);
    const [isSwiping, setIsSwiping] = useState(false);
    const sliderContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (activeSlide === 0) {
            const box = sliderContainerRef.current;
            box.scrollLeft = 0;
        }
    }, [activeSlide]);

    const handleTouchStart = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
        setStartX(event.touches[0].clientX);
        setIsSwiping(true);
    }, []);

    const handleTouchMove = useCallback((direction: number) => {
        changeActiveSlide(activeSlide + direction);
        const box = sliderContainerRef.current;
        const width = box.clientWidth;
        box.scrollLeft += direction * width;
        setIsSwiping(false);
    }, [activeSlide, changeActiveSlide]);

    const handleTouchMoveEvent = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
        const deltaX = event.touches[0].clientX - startX!;
        if (!isSwiping) {
            return
        } else if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
            let direction = deltaX > 0 ? -1 : 1;
            if (activeSlide === 0 && direction === -1) {
                direction = 0;
            }
            if (activeSlide === Children.count(children) - 1 && direction === 1) {
                direction = 0;
            }
            handleTouchMove(direction);
        }
    }, [activeSlide, children, handleTouchMove, isSwiping, startX]);

    const toTheSecondSlide = useCallback(() => {
        const box = sliderContainerRef.current;
        const width = box.clientWidth;
        box.scrollLeft += width;
        changeActiveSlide(1);
    }, [changeActiveSlide]);

    return (
        <div className={styles.carousel} onTouchStart={handleTouchStart} onTouchMove={handleTouchMoveEvent}>
            <div className={styles.container} ref={sliderContainerRef}>
                {Children.map(children, (child: React.ReactNode, index) => (
                    <React.Fragment key={index}>
                        {React.cloneElement(child as React.ReactElement, { toTheSecondSlide, activeSlide })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
});

export default Slider;
