import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Review {
  author_name: string;
  rating: number;
  text: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ reviews }) => {
  return (
    <Carousel>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>{review.author_name}</p>
          <p>{review.rating} / 5</p>
          <p>{review.text}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewsCarousel;
