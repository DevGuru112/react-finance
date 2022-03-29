import { useState, useEffect } from "react";

const App = () => {
    const [val, setVal] = useState(0);
    var obj = {
        result: 0,
        addNumber: function (a, b) {
            this.result = a + b;
            return this;
        },
        multiplyNumber: function (a) {
            this.result = this.result * a;
            return this;
        },
        divideNumber: function (a) {
            this.result = this.result / a;
            return this;
        }
    }

    useEffect(()=>{
        obj.addNumber(10, 20).divideNumber(5).multiplyNumber(10);
        setVal(obj.result);
    })


    return (
        <>
            {console.log('val - Lee >>>>', val)}
            <h1>Lee - Example</h1>
            <h2>{val}</h2>
        </>
    )
}

export default App;