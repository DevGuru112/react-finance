import { Link } from 'react-router-dom';

const App = () => {
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
            <h1>Lee - Examples</h1>
            {
                title.map((item, index) => (
                    <div key={index}>
                        <Link to={`/${item}`}>{item}</Link>
                    </div>
                ))
            }
        </>
    )
}

export default App;