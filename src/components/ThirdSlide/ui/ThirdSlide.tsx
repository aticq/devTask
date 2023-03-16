import React, { useCallback, useState } from 'react';
import ModalWindow from 'components/ThirdSlide/ui/ModalWindow';
import bottle from 'assets/images/ThirdSlide/bottle.png';
import bubble1 from 'assets/images/ThirdSlide/bubble1.png';
import bubble2 from 'assets/images/ThirdSlide/bubble2.png';
import bubble3 from 'assets/images/ThirdSlide/bubble3.png';
import bubble4 from 'assets/images/ThirdSlide/bubble4.png';
import bubble5 from 'assets/images/ThirdSlide/bubble5.png';
import bubble6 from 'assets/images/ThirdSlide/bubble6.png';
import bubble7 from 'assets/images/ThirdSlide/bubble7.png';
import bubble8 from 'assets/images/ThirdSlide/bubble8.png';
import dinnerIcon from 'assets/images/ThirdSlide/dinnerIcon.png';
import calendarIcon from 'assets/images/ThirdSlide/calendarIcon.png';
import detailButton from 'assets/images/ThirdSlide/detailButton.png';
import styles from './ThirdSlide.module.css';

const ThirdSlide = () => {
    const [openModal, setOpenModal] = useState(false);
    const openModalHandler = useCallback((amount:boolean) => {
        setOpenModal(amount);
    }, []);
    const MemoizedModalWindow = React.memo(ModalWindow);
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.bottle} src={bottle} alt="bottle" />
                <img className={styles.bubble1} src={bubble1} alt="bubble1" />
                <img className={styles.bubble2} src={bubble2} alt="bubble2" />
                <img className={styles.bubble3} src={bubble3} alt="bubble3" />
                <img className={styles.bubble4} src={bubble4} alt="bubble4" />
                <img className={styles.bubble5} src={bubble5} alt="bubble5" />
                <img className={styles.bubble6} src={bubble6} alt="bubble6" />
                <img className={styles.bubble7} src={bubble7} alt="bubble7" />
                <img className={styles.bubble8} src={bubble8} alt="bubble8" />
            </div>
            <div className={styles.title}>
                <h2>Ключевое сообщение</h2>
                <h1>
                    BREND
                    <span>XY</span>
                </h1>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.firstMessage}>
                    <img className={styles.firstIcon} src={dinnerIcon} alt="dinnerIcon" />
                    <h3>
                        Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies
                    </h3>
                </div>
                <div className={styles.secondMessage}>
                    <img className={styles.secondIcon} src={calendarIcon} alt="calendarIcon" />
                    <h3>
                        A arcu
                        <br />
                        {' '}
                        cursus vitae
                    </h3>
                    <img className={styles.detailButton} src={detailButton} onClick={() => openModalHandler(true)} alt="open" />
                </div>
            </div>
            {openModal && <MemoizedModalWindow openModal={setOpenModal} />}
        </div>
    );
};

export default ThirdSlide;
