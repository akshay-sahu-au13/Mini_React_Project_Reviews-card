import React from 'react';
import Review from './Review';
const App = ()=> {

  return <>
    <main>
      <div className="title">
        <h2>Our reviews</h2>
        <div className="underline"></div>
      </div>
      <Review/>
    </main>
  </>
}

export default App;