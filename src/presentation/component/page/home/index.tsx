import { FC } from 'react';
import Header from 'presentation/component/page/home/Header';
import Hero from 'presentation/component/page/home/Hero';
import Info from 'presentation/component/page/home/Info';
import AboutUs from './AboutUs';
import { Wrapper } from './styles';

const HomePage: FC = () => {
    return (
        <Wrapper>
            <Header />
            <Hero />
            <Info />
            <AboutUs />
        </Wrapper>
    );
};

export default HomePage;
