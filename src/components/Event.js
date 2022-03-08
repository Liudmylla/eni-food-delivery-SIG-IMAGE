import React from "react";

class Event extends React.Component {

    handleClick = (event) => {
        console.log(event)
        alert('BOUTON CLIQUE')
    }

    render () {
        return (
            <button onClick={() => this.handleClick()}>CLICK ME !</button>
        )
    }
}

export default Event