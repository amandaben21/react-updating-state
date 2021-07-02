import React from 'react';
class ClickityClick extends React.Component {
    constructor() {
        super();
        //define the inital state here:
        this.state ={
            hasBeenClicked: false
        }; 
    }

    handleClick= () => {
        //update the state here
        this.setState({
            hasBeenClicked: true
        },
        () => console.log(this.state.hasBeenClicked)) //prints true now //if we want to access new updated state we added the callback function as second arugument 
        
        //console.log(this.state.hasBeenClicked);// prints false

    };

    render() {
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;