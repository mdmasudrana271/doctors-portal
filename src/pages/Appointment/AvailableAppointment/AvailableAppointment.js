import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {

    const [appointmentOptions, setAppointmentOption] = useState([])

    const [treatment, setTreatment] = useState(null)


    useEffect(()=> {
        fetch('appointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOption(data))
    }, [])


    return (
        <section className='mt-16'>
            <p className='text-center font-bold text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentOptions.map(option => <AppointmentOption key={option._id} appointmentOption={option} setTreatment={setTreatment}></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal selectedDate={selectedDate} treatment={treatment} setTreatment={setTreatment}></BookingModal>
                }
        </section>
    );
};

export default AvailableAppointment;