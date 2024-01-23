import React from 'react'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage'
import MenuPage from './Pages/MenuPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReqAuth from './Helpers/ReqAuth'
import Auth from './Helpers/Auth'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={
            <ReqAuth>
              <LoginPage />
            </ReqAuth>
          } />
          <Route path='/' element={
            <Auth>
              <HomePage />
            </Auth>
          } />
          <Route path='/menu' element={
            <Auth>
              <MenuPage />
            </Auth>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
