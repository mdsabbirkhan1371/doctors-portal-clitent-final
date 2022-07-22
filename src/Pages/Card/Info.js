import React from 'react';
import CardInfo from './CardInfo';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div class='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <CardInfo
                img={clock}
                cardTitle={"Opening Hours"}
                bgClass={'bg-gradient-to-r from-secondary to-primary'}
            ></CardInfo>
            <CardInfo
                img={marker}
                cardTitle={"Visit Our Locations"}
                bgClass={'bg-accent'}
            ></CardInfo>
            <CardInfo
                img={phone}
                cardTitle={"Contact Us Now"}
                bgClass={'bg-gradient-to-r from-secondary to-primary'}
            ></CardInfo>
        </div>
    );
};

export default Info;