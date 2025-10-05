import React from 'react'
import Home from './Components/Layout/Home'
import AboutUs from './Components/About us/AboutUs'
import ContactUs from './Components/Contact Us/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Courses from './Components/Our Courses/Courses'
import CourseDetail from './Components/Our Courses/CourseDetail'
import PrayerTimes from './Components/Prayer/PrayerTimes'
import Quiz from './Components/Quizes/Quiz'
import { SmoothCursor } from './Components/UI/smooth-cursor'
import GeminiAi from './Components/Asistant/GeminiAi'
import Blog from './Components/Blogs/Blog'
import BlogDetail from './Components/Blogs/BlogDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
  {
    path: '/contact-us',
    element: <ContactUs />,
  },
  {
    path: '/courses/:id',
    element: <CourseDetail />,
  },
  {
    path: '/prayer-times',
    element: <PrayerTimes />,
  },
  {
    path: '/quizzes',
    element: <Quiz />,
  },
  {
    path: '/deeniverse-ai',
    element: <GeminiAi />
  },
  {
    path: '/blogs',
    element: <Blog />
  },
  {
    path: '/blogs/:slug',
    element: <BlogDetail />
  }

])

const App = () => {
  return (
    <>
    <div className='cursor-none'>
      <SmoothCursor />
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
