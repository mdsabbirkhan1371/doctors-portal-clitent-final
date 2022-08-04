import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {

    const { _id, name, slots, price } = treatment;
    const [user, loading] = useAuthState(auth)
    const formatDate = format(date, "PP")
    const handleForm = (event) => {
        event.preventDefault()
        const slot = event.target.slot.value;
        // console.log(name, _id, slot)

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch("https://my-docorts-portal-site.herokuapp.com/booking", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)

                if (data.success) {
                    toast(`Appointment is set ${formatDate} at ${slot}`)
                }
                else {
                    toast.error(`Allready have a appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                // to close modal 
                setTreatment(null)
            })


    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="absolute btn btn-sm btn-circle right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">{name}</h3>
                    <form onSubmit={handleForm} className='grid grid-cols-1 gap-3 mt-5 justify-items-center'>
                        <input type="text" disabled value={format(date, "PP")} className="w-full max-w-xs input input-bordered input-accent" />
                        <select name='slot' className="w-full max-w-xs select select-bordered">
                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user.displayName} className="w-full max-w-xs input input-bordered input-accent" />

                        <input type="text" name='email' disabled value={user.email} className="w-full max-w-xs input input-bordered input-accent" />

                        <input type="text" name='phone' placeholder="Your phone number" className="w-full max-w-xs input input-bordered input-accent" />

                        <input type="submit" placeholder="submit" className="w-full max-w-xs btn btn-secondary" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;