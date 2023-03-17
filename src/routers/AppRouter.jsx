import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import LoginScreen from '../components/login/LoginScreen'

import HeroesRoutes from '../components/routes/HeroesRoutes'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'



const AppRouter = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="login/*" element ={
          <PublicRouter>
            

           <LoginScreen/>
            
          </PublicRouter>

        }
        />

        <Route  path='/*' element={
          <PrivateRouter>
            <HeroesRoutes/>
          </PrivateRouter>
        }/>



        {/*<Route path='/login'element={<LoginScreen/>}/>*/}
        {/*<Route path='*'element={<HeroesRoutes/>}/>*/}
        
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
