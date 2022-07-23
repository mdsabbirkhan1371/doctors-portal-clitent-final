import { sl } from 'date-fns/locale';
import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (

        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title text-secondary text-center">{name}</h2>
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
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} class="btn btn-secondary uppercase text-white">Booking Appointment</button>
                </div>
            </div>
        </div>

    );
};

export default Service;