import React from 'react';
import Service from './Service';
import whitening from '../../assets/images/whitening.png'
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import ExceptionalService from './ExceptionalService';


const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        }
    ]
    return (
        <div className='mt-20'>
            <div>
                <p className='text-center text-primary font-bold'>OUR SERVICES</p>
                <h1 className='text-center font-medium'>Services We Provide</h1>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)

                }
            </div>
            <ExceptionalService></ExceptionalService>
        </div>
    );
};

export default Services;