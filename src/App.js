import React, { useEffect, useState } from 'react'
import './styles/App.css'
// import MovieCardView from './MovieCardView';

import MovieNavbar from './components/Navbar';
import MoviePage from './components/movie/MoviePage';


//a4bb3684

const API_URL = 'https://www.omdbapi.com?apikey=a4bb3684';

function App() {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [mainPage, setMainPage] = useState(true)
  // const [movieView, setMovieView] = useState(false)

  console.log('main page', mainPage)
  // console.log('movie view', movieView)
  console.log("movies", movies)

  const handleClick = () => {
    setMainPage(!mainPage)

    
  }

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log('data', data)
    console.log('data.Search', data.Search)
    setMovies(data.Search)
  }

  

  useEffect(() => {
    searchMovie('batman')
  }, [])

  return (


    <div className='app'>
      <MovieNavbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchMovie={searchMovie}
      />

      <MoviePage
        movies={movies}
        handleClick={handleClick}
        mainPage={mainPage}
      />


    </div >

  )
}

export default App;
