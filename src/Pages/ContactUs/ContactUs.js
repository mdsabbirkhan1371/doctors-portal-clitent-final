import React from 'react';
import background from '../../assets/images/appointment.png'
const ContactUs = () => {
    return (
        <section className='my-12' style={{
            background: `url(${background})`,

        }}>
            <div className='p-12 text-center'>
                <h3 className='font-bold text-secondary'>Contact Us</h3>
                <h1 className='text-xl text-white'>Stay connected with us</h1>
                <div>
                    <input type="text" placeholder="Email Address" class="input input-bordered input-error w-full max-w-xs my-3" />
                    <br />
                    <input type="text" placeholder="Subject" class="input input-bordered input-error w-full max-w-xs" /> <br />
                    <textarea class="textarea textarea-error w-full max-w-xs my-3 " placeholder="Your message"></textarea>
                </div>
                <button class="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Submit</button>

            </div>
        </section>
    );
};

export default ContactUs;