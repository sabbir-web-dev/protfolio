import { useState } from 'react';
import './App.css';
import Navber from './Components/Navber/Navber';
import Hero from './Components/Hero/Hero';

function App() {
  const [theme,setTheme] = useState(true);

  const getTheme = (theme) => {
    setTheme(theme)
  }
  return (
    <div className='full-wrap' data-theme={theme ? "dark" : " "} >
      <Navber getTheme={getTheme} />
      <Hero />
    </div>
  );
}

export default App;
