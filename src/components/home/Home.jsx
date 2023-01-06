import React from 'react';
import Menu from '../Menu';
import Services from '../Services';
import AboutUs from '../AboutUs';
import Banner from '../Banner';
import Container from '../Container';
import Application from '../Application';
import Contact from '../Contact';

const Home = () => {
    return (
        <main>
            <Container>
                <Banner />
                <AboutUs />
                <Services />
                <Menu />
                <Application />
                <Contact/>
            </Container>
        </main>
    );
}

export default Home;
