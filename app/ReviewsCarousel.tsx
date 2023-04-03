'use client'

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export interface Review {
  author_name: string;
  rating: number;
  text: string;
}

interface ReviewsCarouselProps {
  reviewData: any;
}

type review = {
  author_name: string,
  rating: number,
  text: string
}

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ reviewData }) => {

  const reviews = reviewData.result.reviews;

  console.log('reviews: ', reviews);

  return (
    <Carousel
      showStatus={false}
      swipeable={true}
      width={'60%'}
      infiniteLoop={true}
    >
      {reviews && reviews.map((review: review, index: React.Key) => (
        <div key={index}>
          <div key={index} style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 20 }}>
            <p>{review.author_name}</p>
            <p>{review.text}</p>
            <p>{review.rating} / 5</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ReviewsCarousel;
