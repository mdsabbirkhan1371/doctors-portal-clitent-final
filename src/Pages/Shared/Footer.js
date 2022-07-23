import React from 'react';
import footer from '../../assets/images/footer.png'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <section className='p-12' style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <footer className="pl-24 footer">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deeply Checkup</a>
                </div>
                <div>
                    <span className="footer-title">Our Health</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>

                </div>
                <div>
                    <span className="footer-title">Our Address</span>
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
//             <footer className="ml-24 footer"

//             >

//                 <div>
//                     <span className="footer-title">Services</span>
//                     <a className="link link-hover">Emergency Checkup</a>
//                     <a className="link link-hover">Weekly Checkup</a>
//                     <a className="link link-hover">Monthly Checkup</a>
//                     <a className="link link-hover">Deeply Checkup</a>
//                 </div>
//                 <div>
//                     <span className="footer-title">Our Health</span>
//                     <a className="link link-hover">Fluoride Treatment</a>
//                     <a className="link link-hover">Cavity Filling</a>
//                     <a className="link link-hover">Teath Whitening</a>

//                 </div>
//                 <div>
//                     <span className="footer-title">Our Address</span>
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
