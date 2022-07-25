import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleForm = (event) => {
        event.preventDefault()
        const slot = event.target.slot.value;
        console.log(name, _id, slot)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleForm} className='grid grid-cols-1 gap-3 mt-5 justify-items-center'>
                        <input type="text" disabled value={format(date, "PP")} className="input input-bordered input-accent w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="text" name='email' placeholder="email address" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="text" name='phone' placeholder="Your phone number" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="submit" placeholder="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;