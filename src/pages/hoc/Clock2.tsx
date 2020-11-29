import React from "react";
import withTime from "./withTime";

export class Clock2 extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        console.log("Clock construct")
    }

    componentDidMount() {
        console.log("Clock did mount")
    }

    componentWillUnmount() {
        console.log("Clock will umount")
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: any, snapshot?: any) {
        console.log("Clock did update")
    }

    render() {
        return (
            <div>
                <h1>Component with HOC</h1>
                <h2>It is {this.props.time.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default withTime(Clock2)
