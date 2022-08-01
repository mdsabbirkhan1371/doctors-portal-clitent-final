
import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots } = service;
    return (

        <div className="shadow-xl card lg:max-w-lg bg-base-100">
            <div className="text-center card-body">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500'>try another date</span>

                    }
                </p>

                <p>
                    {slots.length}{slots.length > 1 ? 'spaces' : 'space'} available
                </p>
                <div className="justify-center card-actions">
                    <label
                        htmlFor="booking-modal"
                        className="text-white uppercase btn btn-sm modal-button btn-secondary bg-gradient-to-r from-secondary to-primary"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                    >Booking Appointment</label>
                </div>
            </div>
        </div >

    );
};

export default Service;