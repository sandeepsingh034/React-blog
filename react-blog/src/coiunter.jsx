import { useState } from "react"

const Counter = () => {

    let [count, setCount] = useState(0);

    function updateCouonter() {
        setCount(count++);
    }


    return (


        <div>
            <h1>Counter</h1>

            <h1>{count}</h1>

            <button onClick={updateCouonter}>Click to see counter </button>
        </div>

    )
}
export default Counter;