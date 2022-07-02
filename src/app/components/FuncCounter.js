import React, {useState, useEffect} from 'react';

// useState - hooks, useful to implement state in functional component
// useEffect is useful to implement life cycle events similar to 
//              componentDidMount, componendDidUpdate, componentWillUnmount

const FuncCounter = (props) => {
    console.log("Funccounter render", props)

    // destructuing array into variable
    // useState returns an array with 2 elements, 1st element is current state value,
    //  second element is  a setter function to change state value
    // calling setter will render the function again
    const [counter, setCounter] = useState(0) // 0 is default value take from property props.startValue

    const [pageLikes, setLikes] = useState(1000)

    return (
        <div>
            <h2>Func Counter hooks</h2>
            <p>counter is {counter}</p>
            <p>Likes is {pageLikes}</p>
            <button onClick={ () => setCounter(counter + 1) }> counter +1 </button>
            <button onClick={ () => setLikes(pageLikes + 1) }> like +1 </button>
        </div>
    )
}

export default FuncCounter;