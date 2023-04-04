'use client'

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './ReviewsCarousel.module.css';

interface ReviewsCarouselProps {
  reviewData: any;
}

type review = {
  author_name: string,
  rating: number,
  text: string
}

interface StarRatingProps {
  rating: number;
}

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ reviewData }) => {

  const reviews = reviewData.result.reviews;

  const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className='fa-solid fa-star'
          style={{ color: i <= rating ? 'gold' : 'white' }}
        />
      );
    }

    return <div>{stars}</div>;
  };

  return (
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
              <StarRating rating={review.rating} />
              <p>{review.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
  );
};

export default ReviewsCarousel;
