import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP');

    // const { data: services, isLoading } = useQuery('available', () =>

    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    // )

    // if (isLoading) {
    //     return <Loading></Loading>
    // }




    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [formattedDate]);


    return (
        <div>
            <div>
                <h4 className='text-2xl text-center text-secondary'>Available Services {format(date, "PP")}</h4>
                <h5 className='text-center'>Please select a service</h5>
            </div>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map(service => < Service
                        service={service}
                        key={service._id}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {
                treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div >


    );
};

export default AvailableAppointment;