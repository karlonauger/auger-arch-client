import 'bootstrap/dist/css/bootstrap.css';
import './components/canvas';

import React from 'react';
import ReactGA from 'react-ga4';

import DotCanvas from './components/dotCanvas';
import Navbar from './components/navbar';
import Title from './components/title';
import About from './components/about';
import AugerConstruction from './components/augerConstruction';
import PartnerToProfit from './components/partnerToProfit';
import Tetris from './components/tetris';
import Infrastructure from './components/infrastructure';
import Architecture from './components/architecture';
import Footer from './components/footer';

ReactGA.initialize(process.env.REACT_APP_GA_ID, {
  send_page_view: true,
  gtagOptions: { cookie_flags: 'max-age=7200;secure;samesite=none' }
});

function App() {
  return (
    <div>
      <DotCanvas />
      <Navbar />
      <Title />
      <About />
      <AugerConstruction />
      <PartnerToProfit />
      <Tetris />
      <Architecture />
      <Infrastructure />
      <Footer />
    </div>
  );
}

export default App;
