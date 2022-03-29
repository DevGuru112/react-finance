import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Online from './components/IsOnline'
import UseContext from './components/UseContext';
import UseRef from './components/UseRef'
import UseRef2 from './components/UseRef2'
import UseRef3 from './components/UseRef3'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseContext /> */}
    {/* <UseRef /> */}
    {/* <UseRef2 /> */}
    <UseRef3 />
    {/* <App /> */}
    {/* <Online /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
