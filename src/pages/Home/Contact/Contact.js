import React from "react";

import logo from '../../../assets/images/appointment.png'

const Contact = () => {
  return (
    <section style={{background: `url(${logo})`, backgroundSize: 'cover'}} className="mt-44 pt-10 pb-24">
      <div className="text-center">
        <h4 className="text-primary text-xl font-bold">Contact Us</h4>
        <h2 className="text-4xl text-white">Stay connected with us</h2>
      </div>
      <div className="text-center mt-10">
        <div>
          <input
            type="text"
            placeholder="Email Address"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full max-w-xs my-5"
          />
        </div>
        <div>
          <textarea className="textarea w-full max-w-xs" placeholder="Your message"></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mt-8 w-28 text-white font-bold">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
