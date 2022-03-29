import React, { useState, useEffect, useRef, useReducer } from 'react';
import axios from 'axios';
// import reducers from '../../redux/examples/todos/src/reducers';

// const Example = (props) => {
//   const [count, setCount] = useState(0);
//   const latestCount = useRef(count);

//   // Similar to componentDidMount and componentDidUpdate:  
//   useEffect(() => {     // Update the document title using the browser API    
//     latestCount.current = count;
//     setTimeout(()=>{

//       console.log(`You clicked ${latestCount.current} times`);
//     }, 3000)
//   });

//   const handleAlertClick = () => {
//     setTimeout(() => {
//       alert('you clicked on: ' + count);
//     }, 3000);
//   }

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//       <button onClick={handleAlertClick}>
//         Show alert
//       </button>
//     </div>
//   );
// }

// const Counter = () => {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(count => count + step);
//     }, 1000)
//     return () => clearInterval(id)
//   }, [step]);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <input value={step} onChange={e => setStep(Number(e.target.value))} />
//     </div>

//   )
// }

// const Counter = () => {
//   const [state, dispatch] = useReducer(reducer,initialState);
//   const {count, step} = state;

//   useEffect(()=>{
//     const id = setInterval(() => {
//       dispatch({type: 'tick'});
//     }, 1000)
//     return () => clearInterval(id);
//   }, [dispatch])
//   return (
//     <>
//       <h1>{count}</h1>
//       <input value={step} onChange={e=>{
//         dispatch({
//           type: 'step',
//           step: Number(e.target.value)
//         });
//       }} />
//     </>
//   );
// }

// const initialState = {
//   count: 0,
//   step: 1,
// };

// const reducer = (state, action) => {
//   const {count, step} =state;
//   if (action.type==='tick'){
//     return { count: count+step, step};
//   }else if (action.type === 'step') {
//     return { count, step: action.step};
//   } else {
//     throw new Error();
//   }
// }

const SearchResults = () => {
  const [data, setData] = useState({hits:[]});

  async function fetchData () {
    const result = await axios(
      'https://hn.algolia.com/api/v1/search?query=react',
    );
    setData(result.data);
  }

  useEffect(()=>{
    fetchData();
  },[])
  
  return (
    <>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

// const sayHi = (person) => {
//   const name = person.name;
//   setTimeout(()=> {
//     alert('hello, ' + name);
//   }, 3000);
// }

// let someone = {name: 'Dan'};
// sayHi(someone);

// someone = {name: "Yuzhi"};
// sayHi(someone);

// someone= {name: 'Dominic'};
// sayHi(someone);



export default SearchResults;