import React from "react";
import CardContainer from "../atoms/CardContainer";
import StarRating from "../atoms/StarRating";
import TestimonialContent from "../molecules/TestimonialContent";
import AuthorInfo from "../molecules/AuthorInfo";

const TestimonialCard = ({ testimonial }) => {
  const { name, role, image, text, dark, stars } = testimonial;

  return (
    <CardContainer dark={dark}>
      {stars && <StarRating count={stars} />}
      <TestimonialContent text={text} />
      <AuthorInfo name={name} role={role} image={image} />
    </CardContainer>
  );
};

export default TestimonialCard;
