import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Gallery from './components/Gallery';
import Map from './components/Map';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
  <Routes>
      <Route exact path="/" element={<App/>}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>
      <Route path="/map" element={<Map/>}></Route>

  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
