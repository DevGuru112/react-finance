import { useMemo, useState } from "react";

const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calcullation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    }
    const addTodo = () => {
        setTodos((t) => [...t, "new Leegukchol's Member"]);
    }

    return (
        <div>
            <div>
                <h2>My Todos using useMemo</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation - Lee</h2>
                {calcullation}
            </div>
        </div>
    )
}

const expensiveCalculation = (num) => {
    console.log('Calculating...');
    for (let i = 0; i < 10000; i++) {
        num += 1;
    }
    return num;
}

export default App;