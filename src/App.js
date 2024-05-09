import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './Component/Header'; 
import Mainpage from './Component/Mainpage'; 
import Testimonials from './Component/Testimonials';
import Footer from './Component/Footer';
import Faq from './Component/Faq'; 
import Test from './Component/Test'; 
// import Ourprojects from './Components/Ourprojects'; 
// import Residential from './Components/Residential'; 
// import Commercial from './Components/Commercial'; 
// import Hometheatre from './Components/Hometheatre'; 
// import Entertainment from './Components/Entertainment'; 
// import Landscape from './Components/Landscape'; 
// import Automation from './Components/Automation'; 
// import Spacesaving from './Components/Spacesaving'; 
// import Portfolio from "./Components/Portfolio";
// import Career from "./Components/Career";
// import Faq from './Components/Faq'; 
// import Remodel from './Components/Remodel'; 




function App() {
  return (
    <Router>
      <div className="App">
        <Header /> 
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Test" element={<Test />} />
          {/* <Route path="/Contact" element={<Contact />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Ourprojects" element={<Ourprojects />} />
          <Route path="/Residential" element={<Residential />} />
          <Route path="/Commercial" element={<Commercial />} />
          <Route path="/Hometheatre" element={<Hometheatre />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/Landscape" element={< Landscape />} />
          <Route path="/Automation" element={< Automation />} />
          <Route path="/Spacesaving" element={< Spacesaving />} />
          <Route path="/Portfolio" element={< Portfolio />} />
          <Route path="/Career" element={< Career />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/Remodel" element={<Remodel />}/> */}


        </Routes>
        {/* <Whatsapp/> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
