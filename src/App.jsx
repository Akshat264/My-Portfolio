import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Section1 from "./Components/section1";
import NavBar from './Components/navbar';
import About from './Components/about';
import SocialIcons from './Components/Social_icons';
import ProjectSection from './Components/Projects';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Section1/>
      <SocialIcons/>
      <About/>
      <ProjectSection/>
    </>
  )
}

export default App
