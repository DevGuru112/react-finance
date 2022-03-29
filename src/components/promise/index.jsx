import { useState } from "react";


const App = () => {

    const [txt, setTxt] = useState('');

    const myDisplayer = (some) => {
        setTxt(some);
    }

    let myPromise = new Promise((myResolve, myReject)=> {
        let x = 0;
        if(x==0){
            myResolve('Ok');
        }else{
            myReject('Error');
        }
    });

    myPromise.then(
        (value) => myDisplayer(value),
        (error) => myDisplayer(error)
    );

    return (
        <>
            <h2>Javascript Promise -- Lee</h2>
            <p>Wait 3 second (3000 milliseconds) for this page to change.</p>
            <h1>{txt}</h1>
        </>
    )
}

export default App;