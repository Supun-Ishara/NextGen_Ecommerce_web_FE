import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58638744405!2d79.7738030325544!3d6.922001981332362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!5e0!3m2!1sen!2slk!4v1727617522996!5m2!1sen!2slk"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input 
                         type="text" 
                         className="form-control" 
                         placeholder="Name" 
                      />
                    </div>
                    <div>
                      <input 
                         type="email" 
                         className="form-control" 
                         placeholder="Email" 
                      />
                    </div>
                    <div>
                      <input 
                         type="tel" 
                         className="form-control" 
                         placeholder="Mobile Number" 
                      />
                    </div>
                    <div>
                      <textarea 
                         name="text" 
                         className="w-100 form-control" 
                         cols="30" 
                         rows="4"
                         placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button1 border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="contact-detail">
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0"> Colombo, Sri Lanka</address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <FiPhoneCall className="fs-5" />
                        <a href="tel:+94 718465703">+94 718465703</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href='mailto:nextgendresses@gmail.com'>
                         nextgendresses@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 7 AM - 10 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Contact;
