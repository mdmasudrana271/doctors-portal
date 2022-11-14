import React from "react";
import { format } from 'date-fns';

const BookingModal = ({treatment, selectedDate, setTreatment}) => {
    const {name, slots} = treatment;
    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentdDate: date,
            treatment: name,
            patient: patientName,
            slot: slot,
            email,
            phone,
        }
        console.log(booking);

        setTreatment(null)
    }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-2 mt-6">
            <input type="text" disabled value={date} className="input input-bordered w-full" />
            <select name='slot' className="select select-bordered w-full">
                {
                    slots.map((slot, index) =>  <option key={index} value={slot}>{slot}</option>)
                }
            </select>
            <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" />
            <input name='email' type="email" required placeholder="Email Address" className="input input-bordered w-full" />
            <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full" />
            <input type="submit"   className="btn btn-accent w-full" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
