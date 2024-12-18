import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaPinterestP, FaWhatsapp } from "react-icons/fa";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
            <div className="input-group">
            <input 
               type="text" 
               className="form-control py-1" 
               placeholder="Your Email Address" 
               aria-label="Your Email Address" 
               aria-describedby="basic-addon2"
               />
            <span className="input-group-text p-2" id="basic-addon2">
              Subscribe
            </span>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
         <div className='container-xxl'>
           <div className='row'>
             <div className='col-4'>
              <h4 className='text-white'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Colombo, Sri Lanka
                </address>
                <a 
                  href='tel:+94 71846570' 
                  className='mt-3 d-block mb-1 text-white'>
                  +94 71846570
                </a>
                <a 
                  href='mailto:nextgendresses@gmail.com' 
                  className='mt-2 d-block mb-0 text-white'>
                  nextgendresses@gmail.com
                </a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href='https://facebook.com'>
                    <FaFacebookF className='fs-4' />
                  </a>
                  <a className='text-white' href='https://instagram.com'>
                    <FaInstagram className='fs-4' />
                  </a>
                  <a className='text-white' href='https://instagram.com'>
                    <FaPinterestP className='fs-4' />
                  </a>
                  <a className='text-white' href='https://whatsapp.com'>
                    <FaWhatsapp className='fs-4' />
                  </a>
                </div>
              </div>
              </div> 
             <div className='col-3'>
              <h4 className='text-white'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                 <Link to="/privacy-policy" className='text-white py-2 mb-1'>Privacy Policy</Link>
                 <Link to="/exchange-policy" className='text-white py-2 mb-1'>Exchange Policy</Link>
                 <Link to="/shipping-policy" className='text-white py-2 mb-1'>Shipping Policy</Link>
                 <Link to="/term-conditions" className='text-white py-2 mb-1'>Terms & Conditions</Link>
              </div>
              </div>
             <div className='col-3'>
              <h4 className='text-white'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                 <Link className='text-white py-2 mb-1'>About Us</Link>
                 <Link className='text-white py-2 mb-1'>Faq</Link>
                 <Link className='text-white py-2 mb-1'>Contact</Link>
                 <Link className='text-white py-2 mb-1'>Size Chart</Link>
              </div>
              </div>
             <div className='col-2'>
              <h4 className='text-white'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                 <Link className='text-white py-2 mb-1'>Laptops</Link>
                 <Link className='text-white py-2 mb-1'>Headphones</Link>
                 <Link className='text-white py-2 mb-1'>Tablets</Link>
                 <Link className='text-white py-2 mb-1'>Watch</Link>
              </div>
              </div>
           </div>
         </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}; Powered by Supun</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer