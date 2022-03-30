import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compose } from "redux";
import { addCount } from "../Redux/Counter/CounterAction";

export const Counter = () => {
    const dispatch = useDispatch();

    const count = useSelector((state)=> state.count.count)

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={()=>{dispatch(addCount(1))}}>Add Count</button>
        </div>
    );
};

