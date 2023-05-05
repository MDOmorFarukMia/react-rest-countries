import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import ErrorPage from '../Components/ErrorPage/ErrorPage'
import Home from '../Components/Home/Home'
import AllRecipe from '../Components/AllRecipe/AllRecipe'
import Blog from '../Blog/Blog'
import About from '../Components/About/About'
import Login from '../Components/Login/Login'
import Register from '../Components/Register/Register'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/allrecipe',
                element: <AllRecipe/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/Register',
                element: <Register/>
            }
        ]
    }
])