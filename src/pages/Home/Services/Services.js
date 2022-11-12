import React from 'react';

import fluoride from '../../../assets/images/fluoride.png' 
import whitening from '../../../assets/images/whitening.png' 
import cavity from '../../../assets/images/cavity.png' 
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: whitening
        }
    ]

    return (
        <section className='mt-16 mx-10'>
            <div className='text-center'>
                <h4 className='text-primary text-xl font-bold'>OUR SERVICES</h4>
                <h2 className='text-4xl mt-2'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;