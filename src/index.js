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
import Generator from './components/generator/index'
import FirstPage from './components/FirstPage'
import reportWebVitals from './reportWebVitals';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

const Demo = () => {
  const title = [
    'UseContext',
    'UseRef',
    'UseRef2',
    'UseRef3',
    'UseReducer',
    'UseCallback',
    'UseMemo',
    'Promise',
    'Promise',
    'Async',
    'Chaining',
    'Closure',
    'Generator',
    'MernStack'
  ];
  return (
    <>
      {/* <Link to='/UseContext'>useContext</Link> */}
      <React.StrictMode>
        <Routes>
          {
            title.map((item, index) => (
              <Route key={index} path={item} element={item} />
            ))
          }
          <Route path='/' element={<FirstPage />} />
          {/* <Route path='UseContext' element={<UseContext />} />
          <Route path='UseRef' element={<UseRef />} />
          <Route path='UseRef2' element={<UseRef2 />} />
          <Route path='UseRef3' element={<UseRef3 />} />
          <Route path='UseReducer' element={<UseReducer />} />
          <Route path='UseCallback' element={<UseCallback />} />
          <Route path='UseMemo' element={<UseMemo />} />
          <Route path='Promise' element={<Promise />} />
          <Route path='Async' element={<Async />} />
          <Route path='Chaining' element={<Chaining />} />
          <Route path='Closure' element={<Closure />} />
          <Route path='Generator' element={<Generator />} />
           */}
        </Routes>
      </React.StrictMode>
    </>
  )
}

ReactDOM.render(
<BrowserRouter>
  <Demo />
</BrowserRouter>, 
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
