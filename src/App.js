import React from 'react';
import SkillSwapPro from './SkillSwapPro';
import Success from './Success';

function App() {
  const path = window.location.pathname;
  
  if (path === '/success') {
    return <Success />;
  }
  
  return (
    <div className="App">
      <SkillSwapPro />
    </div>
  );
}

export default App;
