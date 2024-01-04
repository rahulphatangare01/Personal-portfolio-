import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import {darkTheme} from './utils/themes/themes';
import HeroSection from './components/pages/HeroSection';
import Skills from './components/pages/Skills';
import Navbar from './components/pages/Navbar';
import Education from './components/pages/Education';
import Experience from './components/pages/Experience';
import { BrowserRouter as Router} from 'react-router-dom'
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

const Body  = styled.div`
background-color:${({theme})=>theme.bg};
width:100%;
height:100%;
overflow-x:hidden;
`;

const Wrapper = styled.div`
background:linear-gradient(
  38.73deg,
  rgba(204, 0, 187, 0.15) 0%,
  rgba(201, 32, 184, 0) 50%,
  ),

  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0.15) 100%
  );
  width:100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%); 
  `;


function App() {
  return (
  
  <ThemeProvider theme={darkTheme}>
    <Router>

    <Navbar/>
     <Body>
      <HeroSection/>
      <Wrapper>
      <Skills/>
      <Experience/>
      </Wrapper>
      <Projects/>
      <Wrapper>
      <Education/>
      <Contact/>

      </Wrapper>
     </Body>
    </Router>
    </ThemeProvider>
  );
}

export default App;
