import React, {Component} from "react";

class ButtonApp extends Component {
    state = {
        active:false,

    }    
    handleClick = () => {
        this.setState({
            active: !this.state.active
        })
      
    }

    render(){
        return(
            <>
                <button onClick={this.handleClick} style={this.state.active?{backgroundColor:"black", color:"white"}:{backgroundColor:"white", color:"black"}}>{this.state.active?"Włącz":"Wyłącz"}</button>
            
            </>
        )
    }
    
}

export default ButtonApp;