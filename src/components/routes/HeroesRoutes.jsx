import React from 'react'
import {  Navigate, Route, Routes } from 'react-router-dom'
import DcScreen from '../dc/DcScreen'
import HeroPage from '../hero/HeroPage'
import MarvelScreen from '../marvel/MarvelScreen'
import SearchScreen from '../search/SearchScreen'
import { Navbar } from '../ui/NavBar'

const HeroesRoutes = () => {
  return (
    <>


      <Navbar/>
      <div className=' container'> 

      <Routes>
        <Route path='/marvel'element={<MarvelScreen/>}/>
        <Route path='/dc'element={<DcScreen />}/>
        
        <Route path='/search'element={<SearchScreen/>}/>
        <Route path='/hero/:id'element={<HeroPage/>}/>
        
        <Route path='/' element={<Navigate to ="/marvel "/>}/>
        
      </Routes>
 
      </div>
      
    </>
  )
}

export default HeroesRoutes
