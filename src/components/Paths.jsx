import React, { useEffect } from 'react'
import { Routes, Route, Navigate  } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { useResultContext } from '../contexts/ResultContextProvider'
import { Loading } from './Loading'
import { ArticlesSearch } from './ArticlesSearch'
import { ImagesSearch } from './ImagesSearch'

export const Paths = () => {
  const { results, isLoading, getResults, searchTerm } = useResultContext()
  const location = useLocation()

  useEffect(() => {
    if(searchTerm) {
      getResults(`${location.pathname}?query=${searchTerm}`)
    }
    
  }, [searchTerm, location.pathname])

  if(isLoading) return <Loading />

  return (
    <div className='p-4'>
      <Routes>
        <Route exact path='/' element={<Navigate to='/search' />} />
        <Route exact path='search' element={<ArticlesSearch results={results} />} />    
        <Route exact path='imagesearch' element={<ImagesSearch results={results} />} />     
      </Routes>
    </div>
  )
}
