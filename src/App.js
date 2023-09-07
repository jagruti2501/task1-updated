import React from 'react';
import './App.css';
import Header from './Components/Header';
import EmailInput from './Components/EmailInput';
import Rtc from './Components/Rtc';
import Adv from './Components/Adv';
import Info from './Components/Info';
import Template from './Components/Template';
import Space from './Components/Space';
import About from './Components/About';





function App() {
  return (
    <div className="App">
        <Header/>
        <EmailInput/>
        <Rtc/>
        <Adv/>
        <Info/>
        <Template/>
        <Space/>
        <About/>
        
      <main>
       
        
        {/* Other content goes here */}
      </main>
    </div>
  );
}

export default App;
