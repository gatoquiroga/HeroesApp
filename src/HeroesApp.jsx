import React from 'react'
import AuthProvider from './context/AuthProvider'
import AppRouter from './routers/AppRouter'

const HeroesApp = () => {
  return (
    <AuthProvider>
   <AppRouter/>
    </AuthProvider>
  )
}

export default HeroesApp
