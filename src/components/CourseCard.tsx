import React from 'react';

type Props = {
  title: string;
  description: string;
  price: number;
  url: string;
  imgSrc: string;
  imgAlt?: string;
};

const CourseCard = ({
  title,
  description,
  price,
  url,
  imgSrc,
  imgAlt,
}: Props) => {
  return (
    <div className='overflow-hidden flex flex-col max-w-lg mx-auto text-center text-dark bg-white border border-primary-dark rounded-lg shadow'>
      <div className='relative h-64 w-full'>
        <img
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={imgSrc}
          alt={imgAlt}
        />
      </div>
      <div className='p-6 xl:p-8'>
        <h3 className='mb-4 text-2xl font-semibold'>{title}</h3>
        <p className='font-light text-gray-500 sm:text-lg dark:text-gray-400'>
          {description}
        </p>
        <div className='flex items-baseline justify-center my-4'>
          <span className='mr-2 text-5xl font-extrabold'>{price} €</span>
        </div>

        <a
          href={url}
          className='text-dark bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center '
        >
          Sužinoti daugiau
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
