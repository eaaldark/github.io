import React from 'react';
import RouterDom from './router';

function App(props:any) {
  return (
    <div className="w-full h-screen global-background flex flex-col">
      <RouterDom />
    </div>
  );
}

export default App;

//https://play.tailwindcss.com/Lre4lqafF0