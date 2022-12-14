import React from "react";

const AppointmentOption = ({appointmentOption, setTreatment}) => {
  const { name, slots } = appointmentOption;

  return (
    <div className="card w-full shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl text-center font-bold text-secondary">{name}</h2>
        <p className="text-center">{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        <p className="text-center">{slots.length} {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
        <div className="card-actions justify-center">
          <label disabled={slots.length === 0} onClick={()=> setTreatment(appointmentOption)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
