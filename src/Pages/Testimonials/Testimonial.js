import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            review: '',
            img: people1,
            country: "california"
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: '',
            img: people2,
            country: "california"
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: '',
            img: people3,
            country: "california"
        }
    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h3 className='font-bold text-secondary'>Testimonial</h3>
                    <h1 className='text-3xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;