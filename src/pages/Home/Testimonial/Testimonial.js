import React from "react";
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import ReviewCard from "./ReviewCard";

const Testimonial = () => {

    const reviewData =[
        {
            _id:1,
            name: 'Winson Herry',
            location: 'California',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:2,
            name: 'rose',
            location: 'California',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:3,
            name: 'ariana',
            location: 'California',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ]

  return (
    <section className="mt-24 mx-10">
      <div className="flex justify-between">
        <div>
            <h4 className="text-primary text-xl font-bold">Testimonial</h4>
            <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure> 
            <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid gap-14 grid-cols-1  md:grid-cols-2  lg:grid-cols-3">
        {
            reviewData.map(feedback => <ReviewCard key={feedback._id} feedback={feedback}></ReviewCard>)
        }
      </div>
    </section>
  );
};

export default Testimonial;
