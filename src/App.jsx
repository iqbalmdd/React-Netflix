import React from 'react'
import "./App.css"

import Fire from "./assets/images/fire.png"
import Star from "./assets/images/glowing-star.png"
import Party from "./assets/images/partying-face.png"
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieList/MovieList'


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Popular" emoji={Star} />
      <MovieList type="upcoming" title="Popular" emoji={Party} />
    </div>
  )
}

export default App