import { Link } from 'react-router-dom';

const App = () => {
    const title = [
        'MernStack',
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
    ];
    return (
        <>
            <h1>Lee - Examples</h1>
            {
                title.map((item, index) => (
                    <div key={index}>
                        {
                            item == 'MernStack' ? <Link to={`/${item}`} style={{textDecoration: 'none'}}><h2 style={{color: "#d340fe"}}>{item}</h2></Link> : <Link to={`/${item}`}>{item}</Link>
                        }
                        
                    </div>
                ))
            }
        </>
    )
}

export default App;