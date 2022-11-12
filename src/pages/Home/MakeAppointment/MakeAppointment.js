import React from "react";
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
  return (
    <section className="mt-40">
      <div style={{background: `url(${appointment})`, backgroundSize: 'cover'}} className="hero">
        <div className="hero-content lg:flex-row">
          <img
            src={doctor}
            className="md:w-1/2 hidden md:block rounded-lg shadow-2xl -mt-32"
            alt=""
          />
          <div>
            <h4 className="text-primary mb-5">Appointment</h4>
            <h1 className="text-5xl text-white font-bold">Make an appointment Today</h1>
            <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
