import React, {ChangeEvent, FormEvent, useState} from "react";

const FormSubmit = () => {

    const [state, setState] = useState({error: '', name: ''})

    const onNameChange = function (event:ChangeEvent<HTMLInputElement>) {
        setState({
            ...state,
            name: event.target.value
        })
    }

    const handleSubmit = function (event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!state.name) {
            setState({...state, error: "name is required"})
            return
        }
        setState({
            ...state,
            error: ''
        });

        console.log("Form submit: ", state)
    }

    return (
        <form className="comment-box" onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input value={state.name} onChange={onNameChange}/>
            </div>
            {state.error && (
                <div style={{color: "red"}}>{state.error}</div>
            )}
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

export default FormSubmit

