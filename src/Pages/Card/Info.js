import React from 'react';
import CardInfo from './CardInfo';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <CardInfo
                img={clock}
                cardTitle={"Opening Hours"}
                bgclassName={'bg-gradient-to-r from-secondary to-primary'}
            ></CardInfo>
            <CardInfo
                img={marker}
                cardTitle={"Visit Our Locations"}
                bgclassName={'bg-accent'}
            ></CardInfo>
            <CardInfo
                img={phone}
                cardTitle={"Contact Us Now"}
                bgclassName={'bg-gradient-to-r from-secondary to-primary'}
            ></CardInfo>
        </div>
    );
};

export default Info;