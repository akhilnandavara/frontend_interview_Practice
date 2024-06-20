function Counter(){
    const [count,setCount] = React.useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        if(count>0) setCount(count-1)
    }
    return (
        // without JSX
    // React.createElement('div',null,
    //     React.createElement('h1',null,`Counter ${count}`),
    //     React.createElement('button',{onClick:increment},'Increment'),
    //     React.createElement('button',{onClick:decrement},'Decrement')
    // )
    // JSX
    <div>
        <h1>Counter {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
    )
}

ReactDOM.render(React.createElement(Counter),document.getElementById('root') )