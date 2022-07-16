import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./sliceCounter"

const Counter = () => {
    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)

    const addAmount = Number(incrementAmount) || 0

    const resetAll = () => {
        setIncrementAmount(0)
        dispatch(reset())
    }

    return (
        <div className="Counter">
            <h1>{count}</h1>
            <div className="group">
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(decrement())}>-1</button>
            </div>

            <div className="group">
                <input 
                    type="text" 
                    value={incrementAmount} 
                    onChange={ (e) => {setIncrementAmount(e.target.value)} } 
                />
                <button onClick={ () => { dispatch(incrementByAmount(addAmount)) } }>Add Amount</button>
                or
                <button onClick={resetAll}>Reset</button>
            </div>
        </div>
    )
}

export default Counter