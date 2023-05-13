import React from 'react';
import { Box } from 'theme-ui';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialsCard from 'components/cards/TestimonialsCard';
import testimonialsImage1 from 'assets/testimonials/testimonial-1-1.png';
import testimonialsImage2 from 'assets/testimonials/testimonial-1-2.png';
import testimonialsImage3 from 'assets/testimonials/testimonial-1-3.png';
import testimonialsImage4 from 'assets/testimonials/testimonial-1-4.png';
import testimonialsImage5 from 'assets/testimonials/testimonial-1-5.png';
import testimonialsImage6 from 'assets/testimonials/testimonial-1-6.png';
import SectionHeader from 'components/section-heading';

SwiperCore.use([Autoplay]);

const TESTIMONIALS_DATA = [
  [
    {
      image: testimonialsImage1,
      text: 'I found this course to be highly relevant to anyone involved in startup and looking to enhance their startup skills, improve great ideas and understand the value of different ideation. The instructor was expert who explained the concept with easy to understand lectures and clear instructions. I look forward to attending another.',
      username: '@debasis.prusty',
      name: 'Debasis Prusty',
    },
    {
      image: testimonialsImage2,
      text: 'Best e-learning platform for beginners The courses are top notch, I really love the simplified way of making the courses easier to understand. One should definitely consider taking these courses before starting up your business, the lecture videos were so amazing and concepts were easy to understand. This was a valuable learning experience.',
      username: '@saumya.khatri',
      name: 'Saumya Khatri',
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: 'Ever since high school I have wanted to start my own side hustel, but i did not know where to start and how to go about it. After attending the markoknow courses, I have a solid plan of turning my vision into a reality. Moreover i have mentors and founders to help me each step of the way and a huge network of other like minded people to interact and learn from.',
      username: '@navya.mathew',
      name: 'Navya Mathew',
    },
    {
      image: testimonialsImage4,
      text: 'I found this course to be highly relevant to anyone involved in startup and looking to enhance their startup skills. I look forward to attending another.',
      username: '@debasis.prusty',
      name: 'Debasis Prusty',
    },
  ],
  [
    {
      image: testimonialsImage5,
      text: 'One should definitely consider taking these courses before starting up your business, the lecture videos were so amazing and concepts were easy to understand.',
      username: '@saumya.khatri',
      name: 'Saumya Khatri',
    },
    {
      image: testimonialsImage6,
      text: 'Moreover i have mentors and founders to help me each step of the way and a huge network of other like minded people to interact and learn from.',
      username: '@navya.mathew',
      name: 'Navya Mathew',
    },
  ],
  [
    {
      image: testimonialsImage1,
      text: 'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
      username: '@hello.mimmie',
      name: 'Minnie Horn',
    },
    {
      image: testimonialsImage2,
      text: 'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.',
      username: '@merryn.manley',
      name: 'Merryn Manley',
    },
  ],
  [
    {
      image: testimonialsImage3,
      text: 'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
      username: '@hi.veona',
      name: 'Veona Watson',
    },
    {
      image: testimonialsImage4,
      text: 'I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result',
      username: '@hey.nku',
      name: 'Paseka Nku',
    },
  ],
];

const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Box as="section" id="testimonials" sx={styles.testimonials}>
      <SectionHeader
        title="Testimonials"
        description="What client say about us"
      />
      <Swiper {...testimonialCarousel}>
        {TESTIMONIALS_DATA.map((item, index) => (
          <SwiperSlide key={index}>
            {item.map(({ image, text, name, username }, _index) => (
              <TestimonialsCard
                image={image}
                text={text}
                name={name}
                key={_index}
                username={username}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Testimonials;

const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
};
