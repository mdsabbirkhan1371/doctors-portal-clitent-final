import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <section className='flex items-center justify-center my-20'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className='flex-1'>
                <img className='mt-[-100px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-12 text-white'>
                <h3 className='font-bold text-secondary'>Appointment</h3>
                <h1 className='text-3xl'>Make an appointment Today</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsums that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button class="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;