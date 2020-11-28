import React, {useEffect, useState} from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date())
    const tick = () => {
        setDate(new Date())
    }
    useEffect(() => {
        let timeId = setInterval(() => tick(), 1000);
        console.log("component did mount")
        return function cleanup(){
            console.log("component will unmount")
            clearInterval(timeId)
        }
    }, [])
    return (
        <div>
            <h1>Hello, World!</h1>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Clock