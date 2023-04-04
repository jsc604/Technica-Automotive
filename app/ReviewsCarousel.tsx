'use client'

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './ReviewsCarousel.module.css';

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
    <div className={styles.carouselContainer}>


      <Carousel
        className={styles.carousel}
        showStatus={false}
        swipeable={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        {reviews && reviews.map((review: review, index: React.Key) => (
          <div key={index}>
            <div key={index} className={styles.reviewData}>
              <p className={styles.author}>{review.author_name}</p>
              <p>{review.text}</p>
              <p>{review.rating} / 5</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewsCarousel;
