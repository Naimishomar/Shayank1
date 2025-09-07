import React from 'react'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import News from './components/News'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="about" element={<h1>About</h1>}/>
        <Route path="news" element={<News/>}/>
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App

