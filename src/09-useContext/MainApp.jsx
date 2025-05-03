import React from 'react'
import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'

export const MainApp = () => {
  return (
    <>
        <h1> Main App </h1>
        <NavBar />
        
        <hr />

        <Routes>
            <Route path='/' element = {<AboutPage/>}/>
            <Route path='home' element = {<HomePage/>}/>
            <Route path='login' element = {<LoginPage/>}/>

            {/* tecnicas para menejar excepciones: */}

            {/*<Route path='/*' element = { <LoginPage/>}/>*/}
            <Route path='/*' element = { <Navigate to="/home" /> }/>
        </Routes>
    </>
  )
}
