import { useCallback, useState } from 'react';
import previousButton from 'assets/images/ModalWindow/previous.png';
import nextButton from 'assets/images/ModalWindow/next.png';
import closeButton from 'assets/images/ModalWindow/close.png';
import styles from './ModalWindow.module.css';

interface ModalWindowsTypes {
    openModal: (amount:boolean) => void
}

const ModalWindow = ({ openModal }:ModalWindowsTypes) => {
    const textData = [
        { number: '01', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { number: '02', text: 'Faucibus pulvinar elementum integer enim' },
        { number: '03', text: 'Faucibus pulvinar elementum integer enim' },
        { number: '04', text: 'Mi bibendum neque egestas congue quique egestas diam' },
        { number: '05', text: 'Venenatis lectus magna fringilla urna' },
        { number: '06', text: 'Venenatis lectus magna fringilla urna' },
    ];

    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = useCallback(() => {
        if (startIndex === 0) return;
        setStartIndex(startIndex - 3);
    }, [startIndex]);

    const handleNext = useCallback(() => {
        if (startIndex + 3 >= textData.length) return;
        setStartIndex(startIndex + 3);
    }, [startIndex, textData.length]);

    return (
        <div className={styles.overlay}>
            <img className={styles.closeButton} src={closeButton} onClick={() => openModal(false)} alt="close" />
            <div className={styles.modal}>
                <h2 className={styles.firstTitle}>Преимущества</h2>
                <h1 className={styles.secondTitle}>
                    BREND
                    <span>XY</span>
                </h1>
                <div className={styles.container}>
                    {textData.slice(startIndex, startIndex + 3).map(({ number, text }) => (
                        <div className={styles.textContainer} key={number}>
                            <h4>{number}</h4>
                            <h3>{text}</h3>
                        </div>
                    ))}
                    <div className={styles.arrowContainer}>
                        <img className={styles.arrow} src={previousButton} onClick={handlePrev} alt="previous" />
                        <div className={styles.pageDots}>
                            <div className={`${styles.pageDot} ${startIndex === 0 ? styles.pageDotActive : ''}`} />
                            <div className={`${styles.pageDot} ${startIndex === 3 ? styles.pageDotActive : ''}`} />
                        </div>
                        <img className={styles.arrow} src={nextButton} onClick={handleNext} alt="next" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
