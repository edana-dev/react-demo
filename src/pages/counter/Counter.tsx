import React, {useReducer} from "react";

export interface ICounterAction {
    type: string
}

const initialState = {count: 0};
const counter = (state = initialState, action: ICounterAction): any => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1};
        case "DECREMENT":
            return {count: state.count - 1};
        default:
            return state;
    }
}

const Counter = (props: any) => {
    const [state, dispatch] = useReducer(counter, initialState);
    return (
        <div className="counter">
            <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
            <span style={{display: "inline-block", margin: "0 16px"}}>
                {state.count}
            </span>
            <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
        </div>
    )
}

export default Counter