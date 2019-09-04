import React from 'react';
import store from './store'

function App() {{store.dispatch({type: 'INCREMENT'})}
  return (
    <div className="App">
      test  {console.log('teste '+store.getState())}
    </div>
  );
}

export default App;
