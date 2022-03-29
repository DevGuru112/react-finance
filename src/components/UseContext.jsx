import { useState, createContext, useContext } from "react";

const UserContext = createContext();

// const Component1;

const Component1 = () => {
    const [user, setUser] = useState('Leegukchol');

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hi ${user}!1!`}</h1>
            <Component2 user={user} />
        </UserContext.Provider>
    )
}

const Component2 = () => {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    )
}

const Component3 = () => {
    const userName = useContext(UserContext);
    return (
        <>
            <h1>Component 2 {userName}</h1>
            <Component4 />
        </>
    )
}

const Component4 = () => {
    return (
        <>
            <h1>Component 4</h1>
            <Component5 />
        </>
    )
}

const Component5 = () => {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Component 5</h1>
            <h2>{`Hello ${user} again!!!`}</h2>
        </>
    )
}

export default Component1;