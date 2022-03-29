import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
    console.log('child Render');
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>add Todo</button>
        </>
    )
}

export default memo(Todos);