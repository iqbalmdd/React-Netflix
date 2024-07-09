import React, {useState} from 'react'
import "./App.css"

import Fire from "./assets/images/fire.png"
import Star from "./assets/images/glowing-star.png"
import Party from "./assets/images/partying-face.png"
import Navbar from './components/Navbar/Navbar'
import MovieList from './components/MovieList/MovieList'


const App = () => {
  const [searchFilter, setSearchFilter] = useState("")
  const handleSearch = (filter) => {
    setSearchFilter(filter)
  }
  return (
    <div className='app'>
      <Navbar onSearch={handleSearch} />
      <MovieList type="popular" title="Popular" emoji={Fire} searchFilter={searchFilter}/>
      <MovieList type="top_rated" title="Top Rated" emoji={Star} searchFilter={searchFilter}/>
      <MovieList type="upcoming" title="Upcoming" emoji={Party} searchFilter={searchFilter}/>
    </div>
  )
}

export default App