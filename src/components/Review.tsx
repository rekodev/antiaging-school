'use client';

type Props = {
  name: string;
  text: string;
  imgSrc: string;
};

const Review = ({ name, text, imgSrc }: Props) => {
  return (
    <figure className='max-w-screen-md mx-auto p-12'>
      <svg
        className='h-12 mx-auto mb-3 text-dark'
        viewBox='0 0 24 27'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
          fill='currentColor'
        />
      </svg>
      <blockquote>
        <p className='text-xl font-light text-gray-900 md:text-xl'>"{text}"</p>
      </blockquote>
      <figcaption className='flex flex-col gap-2 items-center justify-center mt-6 space-x-3'>
        <img
          className='w-12 h-12 rounded-full'
          src={imgSrc}
          alt='profile picture'
        />
        <div className='flex items-center divide-x-2 divide-gray-500 '>
          <div className='pr-3 font-medium text-dark'>{name}</div>
        </div>
      </figcaption>
    </figure>
  );
};

export default Review;
