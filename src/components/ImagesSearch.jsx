import React from 'react'

export const ImagesSearch = ({ results }) => {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      {results?.map(({thumbnailImageUrl, contextLink, title}, index) => (
        <a className='sm:p-3 p-5' href={contextLink} key={index} target="_blank" rel='noreferrer'>
          <img src={thumbnailImageUrl} alt={title} loading="lazy" />
          <p className='w-36 break-words text-sm mt-2'>
            {title}
          </p>
        </a>
      ))}
    </div>
  )
}
