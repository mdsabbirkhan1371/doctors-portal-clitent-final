import React from 'react';
import Info from '../Card/Info';

import Services from '../Services/Services';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>


        </div>
    );
};

export default Home;