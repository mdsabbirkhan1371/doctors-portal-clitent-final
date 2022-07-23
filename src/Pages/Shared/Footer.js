import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='p-12'>
            <footer class="footer pl-24">
                <div>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deeply Checkup</a>
                </div>
                <div>
                    <span class="footer-title">Our Health</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>

                </div>
                <div>
                    <span class="footer-title">Our Address</span>
                    <h3>New York - 101010 Hudson</h3>
                </div>
            </footer>
            <div className='my-12 text-xl text-center'>
                <p>
                    <small>Copywrite © {year} Name</small>
                </p>
            </div>
        </section>
    );
};

export default Footer;


// const Footer = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     return (

//         <section className='p-12'>
//             <footer class="footer ml-24"

//             >

//                 <div>
//                     <span class="footer-title">Services</span>
//                     <a class="link link-hover">Emergency Checkup</a>
//                     <a class="link link-hover">Weekly Checkup</a>
//                     <a class="link link-hover">Monthly Checkup</a>
//                     <a class="link link-hover">Deeply Checkup</a>
//                 </div>
//                 <div>
//                     <span class="footer-title">Our Health</span>
//                     <a class="link link-hover">Fluoride Treatment</a>
//                     <a class="link link-hover">Cavity Filling</a>
//                     <a class="link link-hover">Teath Whitening</a>

//                 </div>
//                 <div>
//                     <span class="footer-title">Our Address</span>
//                     <h3>New York - 101010 Hudson</h3>
//                 </div>

//             </footer>
//             <div className='my-12 text-xl text-center'>
//                 <p>
//                     <small>Copywrite © {year} Name</small>
//                 </p>
//             </div>
//         </section>

//     );
// };

// export default Footer;
