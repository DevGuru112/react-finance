import { useState, useEffect } from "react";

const App = () => {
    // const [val, setVal] = useState(0);

    const add = (() => {
        let counter = 0;
        return () => {
            counter += 1;
            return counter;
        }
    })();
    const myFun = () => {
        // setVal(add());
        // add();
        // console.log(add());
        console.log(document.getElementById('demo').innerHTML = add());
    }

    return (
        <>
            <h1>Lee -- function Closure</h1>
            <button onClick={myFun}>increment+++</button>
            {/* {console.log} */}
            <h3 id="demo">0</h3>
        </>
    )
}

export default App;