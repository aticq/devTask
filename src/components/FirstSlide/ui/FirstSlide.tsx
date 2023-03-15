import React, { useCallback } from 'react';
import imgButton from 'assets/images/FirstSlide/btn.png';
import bakteria from 'assets/images/FirstSlide/bakti_1.png';
import layer4 from 'assets/images/FirstSlide/Layer4.png';
import layer5 from 'assets/images/FirstSlide/Layer5.png';
import layer7 from 'assets/images/FirstSlide/Layer7.png';
import layer8 from 'assets/images/FirstSlide/Layer8.png';
import pinkSperm from 'assets/images/FirstSlide/pink_sperm_1.png';
import styles from './FirstSlide.module.css';

interface FirstSlideProps {
    toTheSecondSlide?: () => void;
    activeSlide?: number;
}

const FirstSlide = React.memo(
    ({ toTheSecondSlide }: FirstSlideProps) => {
        const handleClick = useCallback(() => {
            toTheSecondSlide?.();
        }, [toTheSecondSlide]);

        return (
            <div className={styles.container}>
                <div className={styles.images}>
                    <img className={styles.sperm} src={pinkSperm} alt="pinkSperm" />
                    <img className={styles.bakteria} src={bakteria} alt="bakteria" />
                    <img className={styles.layer4} src={layer4} alt="bakteria2" />
                    <img className={styles.layer5} src={layer5} alt="bakteria3" />
                    <img className={styles.layer7} src={layer7} alt="bakteria4" />
                    <img className={styles.layer8} src={layer8} alt="bakteria5" />
                </div>
                <p className={styles.hello}>Привет, </p>
                <div className={styles.titleContainer}>
                    <h1>
                        Это
                        {' '}
                        <span>не</span>
                        <br />
                        коммерческое
                        <br />
                        {' '}
                        задание
                        <img
                            style={{ marginLeft: 50 }}
                            src={imgButton}
                            onClick={handleClick}
                            alt="imgButton"
                        />
                    </h1>
                </div>
            </div>
        );
    },
);

export default FirstSlide;
