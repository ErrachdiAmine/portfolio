import './App.css'
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home       from './pages/home'
import About      from './pages/about'
import Contact    from './pages/contact'
import Upcoming   from './pages/upcoming'
import Scaffolder from './layouts/scaffolder'



function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Scaffolder/>} >
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/upcoming' element={<Upcoming/>} />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />

    </>
  )
}

export default App
