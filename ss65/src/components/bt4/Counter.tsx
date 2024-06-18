import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCount } from '../actions'
export default function Counter() {
    const stateCount:any = useSelector(state => {
        return state
    })
    console.log(stateCount);
    const dispatch = useDispatch()
    const decrease = () => {
        dispatch({
            type: "DECREASE",
        })
    }
    const increase = () => {
        dispatch(actionCount("INCREASE",1))
    }
  return (
    <div>
        <p>giá trị count: {stateCount.reducerCount}</p>
        <button onClick={increase}>tăng</button>
        <button onClick={decrease}>giảm</button>
    </div>
  )
}
