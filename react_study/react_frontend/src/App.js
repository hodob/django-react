import "./App.css";
import { useState } from 'react';
import Hello from './components/hello';
import Css from './components/css';
import Props from './components/props';
import Wrapper from './components/Wrapper';





function App() {


  return (
    <>
      <Hello />
      <h1>Css </h1>
      <Css />
      <h1>Props</h1>
      <Props name="v프롭티스트" age="20" />
      <Wrapper>
        <Hello name="react" color="red"/>
        <Hello color="pink"/>
      </Wrapper>
    </>
  );
}
export default App;

