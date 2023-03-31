import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState, useEffect } from "react";
import fetchGoogleReviews from '@/lib/googlePlaces';

interface Review {
  author_name: string;
  rating: number;
  text: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = () => {
//   const [reviews, setReviews] = useState<Review>();

//   async function getReviews() {
//     const placeId = "ChIJ0_xvqWUD5kcRzKYnQQZJeZo";
//     const reviewsData = await fetchGoogleReviews(placeId);
//     setReviews(reviewsData);
//   }
  
//  getReviews();
// console.log(reviews)
  return (
    <div>
      {/* {reviews && reviews.map((review, index) => (
        <div key={index}>
          <p>{review.author_name}</p>
          <p>{review.rating} / 5</p>
          <p>{review.text}</p>
        </div>
      ))} */}
    </div>
  );
};

export default ReviewsCarousel;
