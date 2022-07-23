import React from 'react';
import Info from '../Card/Info';
import ContactUs from '../ContactUs/ContactUs';
import MakeAppointment from '../MakeAppointment/MakeAppointment';

import Services from '../Services/Services';
import Testimonial from '../Testimonials/Testimonial';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>

            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;