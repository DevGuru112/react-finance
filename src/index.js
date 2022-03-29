import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Online from './components/IsOnline'
import UseContext from './components/UseContext';
import UseRef from './components/UseRef'
import UseRef2 from './components/UseRef2'
import UseRef3 from './components/UseRef3'
import UseCallback from './components/hooks_useCallback/index'
import UseReducer from './components/UseReducer'
import UseMemo from './components/hooks_useMemo/index'
import Promise from './components/promise/index'
import Async from './components/async/await/index'
import Chaining from './components/chaining/index'
import Closure from './components/closure/index'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <UseContext /> */}
    {/* <UseRef /> */}
    {/* <UseRef2 /> */}
    {/* <UseRef3 /> */}
    {/* <UseReducer /> */}
    {/* <UseCallback /> */}
    {/* <UseMemo /> */}
    {/* <Promise /> */}
    {/* <Async /> */}
    {/* <Chaining /> */}
    <Closure />
    {/* <App /> */}
    {/* <Online /> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
