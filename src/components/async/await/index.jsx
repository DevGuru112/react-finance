import { useState } from "react";

const App = () => {
    const [file, setFile] = useState("");

    const GetFile = async () => {
        let myPromise = new Promise((resolve) => {
            let req = new XMLHttpRequest();
            req.open('GET', './mydoc.txt');
            req.onload = () => {
                if (req.status == 200) {
                    resolve(req.response);
                } else {
                    resolve('File not Found.')
                }
            };
            req.send();
        });
        setFile(await myPromise);
    }
    GetFile();
    return (
        <>
            {console.log("file-----", file)}
            <h2>JavaScript async / await</h2>
            <p>{file}</p>
        </>
    )
}

export default App;