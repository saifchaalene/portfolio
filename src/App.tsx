import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Volunteering from './components/Volunteering'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import ProjectDetails from './components/ProjectDetails'
import CommunityDetails from './components/CommunityDetails'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Volunteering />
      <Hobbies />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
          <Route path="/community-involvement" element={<CommunityDetails />} />
        </Routes>
      </Layout>
    </Router>
  )
}
