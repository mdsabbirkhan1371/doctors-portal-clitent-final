import React from 'react';
import treatment from '../../assets/images/treatment.png'
const ExceptionalService = () => {
    return (

        <div class="card lg:card-side bg-base-100 shadow-xl mt-20">
            <figure>
                <img style={{ width: '458px', height: '576px', borderRadius: '10px' }} src={treatment} alt="Album" />
            </figure>
            <div class="card-body">
                <div className='pl-10 lg:py-20'>
                    <h2 class="card-title text-3xl mb-5">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary my-5">Get Started</button>
                </div>

            </div>
        </div>

    );
};

export default ExceptionalService;