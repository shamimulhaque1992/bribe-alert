import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ServiceTestimonial = ({ testi_img_num, title, name }) => {
   return (
      <>
         <div className="tp-testimonial-two position-relative swiper-slide mb-30">
            <div className="tp-testimonial-two-author mb-20">
               <div className="tp-testimonial-two-author-img">
                  <img src={`/assets/img/testimonial/author-${testi_img_num}.png`} className="img-fluid" alt="img not found" />
               </div>
               <div className="tp-testimonial-two-author-text">
                  <span>{title}</span>
                  <h4 className="tp-testimonial-two-name">{name}</h4>
               </div>
            </div>
            <p>Hymenaeos rhoncus proin aliquam justo sum mauris rutrum nulam semper purus rutru non sociis
               libero varius cumer to duine felis enisa porta ridiculus nisl acequis. </p>
            <div className="tp-testimonial-two-qoute">
               <i ><FaQuoteLeft /></i>
            </div>
         </div>
      </>
   );
};

export default ServiceTestimonial;