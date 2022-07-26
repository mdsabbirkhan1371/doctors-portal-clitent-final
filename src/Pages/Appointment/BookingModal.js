import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {

    const { _id, name, slots } = treatment;
    const [user, loading] = useAuthState(auth)

    const handleForm = (event) => {
        event.preventDefault()
        const slot = event.target.slot.value;
        // console.log(name, _id, slot)
        setTreatment(null)
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
                            {/* {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            } */}
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