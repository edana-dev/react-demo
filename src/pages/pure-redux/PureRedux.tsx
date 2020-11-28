import React from "react";
import {bindActionCreators, createStore} from "redux";
import "./PureRedux.css"

export interface ICounterAction {
    type: string
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";


function run() {
    const initialState = {
        count: 0
    }
    const counter = (state = initialState, action: ICounterAction): any => {
        switch (action.type) {
            case INCREMENT:
                return {count: state.count + 1 }
            case DECREMENT:
                return {count: state.count - 1 }
            default:
                return state;
        }
    }

    const store = createStore(counter);

    function increase(): ICounterAction {
        return {type: INCREMENT}
    }
    function decrease(): ICounterAction {
        return {type: DECREMENT}
    }

    const doIncrease = bindActionCreators(increase, store.dispatch)

    store.subscribe(() => {
        console.log(store.getState())
    })

    doIncrease()
    store.dispatch(increase())
    store.dispatch(decrease())

}

const PureRedux =  () => (
    <div>
        <button onClick={run}>Run</button>
        <p className="warning">*请打开控制台查看运行结果</p>
    </div>
)

export default PureRedux