import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(this.tick, this.props.interval)
    }

    componentWillUnmount() {
       clearInterval(this.timerID)
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    } 

    render() {
        return (
            <h1>Il est : {this.state.date.toLocaleString()}</h1>
        )
    }
}

export default Clock