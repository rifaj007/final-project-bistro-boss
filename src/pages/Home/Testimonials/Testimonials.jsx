import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
   const [reviews, setReviews] = useState([])

   useEffect(() => {
      fetch('reviews.json')
         .then(res => res.json())
         .then(data => setReviews(data))
   }, [])

   console.log(reviews)

   return (
      <section className="mb-32">
         <SectionTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}></SectionTitle>

         <div className="container">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               {
                  reviews.map(review => <SwiperSlide key={review._id}>
                     <div className="text-center px-10">
                        <Rating
                           style={{ maxWidth: 180 }}
                           value={review.rating}
                           readOnly
                        />
                        <p className="text-xl text-[#444444]">{review.details}</p>
                        <h2 className="text-[#CD9003] text-3xl">{review.name}</h2>
                     </div>
                  </SwiperSlide>
                  )
               }
            </Swiper>
         </div>
      </section>
   );
};

export default Testimonials;