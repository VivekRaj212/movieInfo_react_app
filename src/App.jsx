import { useState } from 'react';
import './App.css';
import Home from './home/Home';
import MovieInfo from './movieInfo/MovieInfo';
import {Route,Routes} from "react-router-dom";


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/movieinfo/:id' element={<MovieInfo/>}/>
        </Routes>
    </div>
  )
}

export default App
