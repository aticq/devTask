import './index.css';
import { Suspense, useState } from 'react';
import { Slider } from 'components/Slider';
import { Header } from 'components/Header';
import { FirstSlide } from 'components/FirstSlide';
import { SecondSlide } from 'components/SecondSlide';
import { Footer } from 'components/Footer';
import { ThirdSlide } from 'components/ThirdSlide';

const App = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const goHomeButton = () => {
        setActiveSlideIndex(0);
    };
    return (
        <Suspense fallback="Загрузка...">
            <Header goHomeButton={goHomeButton} />
            <Slider activeSlide={activeSlideIndex} changeActiveSlide={setActiveSlideIndex}>
                <FirstSlide />
                <SecondSlide />
                <ThirdSlide />
            </Slider>
            <Footer />
        </Suspense>
    );
};

export default App;
