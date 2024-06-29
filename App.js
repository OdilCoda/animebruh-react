import './App.css';
import styled from '@emotion/styled/macro';
import { Episodes } from './components/Episodes';
import { Video } from './components/Video';
import { Bottom } from './components/Bottom';
import { useState } from 'react';


function App() {
  const [src, setSrc] = useState()
  const [ep, setEp] = useState()

  return (
    <div className="App">
      <Main>
        <Video setEp={setEp} setSource={setSrc} ep={ep} source={src}/>
        <Episodes setEp={setEp} setSource={setSrc}/>
      </Main>
      <Bottom/>
    </div>
  );
}

const Main = styled.div`
  gap: 10px;
  margin-bottom: 30px;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  
`



export default App;
