import React from "react";
import { testimonials } from "../../data/testimonialsData";
import TestimonialCard from "../organisms/TestimonialCard";

const TestimonialsPage = () => (
  <div className="testimonials-page">
    {testimonials.map((item,id) => (
      <TestimonialCard key={id} testimonial={item} />
    ))}
  </div>
);

export default TestimonialsPage;
