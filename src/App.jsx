import React from 'react';
import TopSection from './components/Top/index';
import BottomSection from './components/Bottom/index';
import './App.css';
import './sass/app.scss';

function App() {
  return (
    <div className={`app-container`}>
      <div className={`main-container`}>
        <div className={`top-section`}>
          <TopSection />
        </div>
        <div className={`bottom-section`}>
          <BottomSection />
        </div>
      </div>
    </div>
  );
}

export default App;
