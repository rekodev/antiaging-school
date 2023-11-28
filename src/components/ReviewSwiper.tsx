'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../app/swiper.css';

import reviewData from '../json/reviews.json';

import Review from './Review';

const reviewImages = [
  '/reviews/Daiva(1).jpg',
  '/reviews/Viktorija.jpg',
  '/reviews/Sandra.jpg',
  '/reviews/Daiva.jpg',
  '/reviews/Ieva.jpg',
];

const ReviewSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      pagination={{ clickable: true }}
      navigation
      spaceBetween={50}
      slidesPerView={1}
    >
      {reviewData?.map((review, idx) => (
        <SwiperSlide key={review.id}>
          <Review
            name={review.name}
            text={review.text}
            imgSrc={`${reviewImages[idx]}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSwiper;
