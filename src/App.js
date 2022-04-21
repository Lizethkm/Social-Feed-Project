import React, { useState } from 'react';
import Posts from './Components/PostFolder/Posts';
import CustomButtons from './Components/CustomButtons/CustomButtons';



function App() {

  const [entries, setEntries] = useState([{name: 'Unique', post:"I'm thinking"}])


  return (
    <div>
      <h2>Social Feed</h2>
      <div>
        <Posts/>
        <CustomButtons message= "Like" />
      </div>
    </div>
  );
}

export default App;
