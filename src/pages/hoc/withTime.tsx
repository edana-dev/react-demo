import React from "react";

export default function withTime(WrappedComponent: any): any {
    return class extends React.Component<any, any> {
        state = {
            time: new Date()
        }

        timeId: any;

        componentDidMount() {
           this.timeId = setInterval(() => this.tick(), 1000)
        }

        componentWillUnmount() {
            if (this.timeId) {
                clearInterval(this.timeId)
            }
        }

        tick() {
            this.setState({time: new Date()})
        }

        render() {
            return <WrappedComponent time={this.state.time} {...this.props}/>;
        }
    }
}