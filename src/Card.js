import React, {Component} from "react";

class Card extends Component {
    constructor(props) {
        super(props);   
    }
    render(){
        return(
            <div className="container">
                <hr/>
                <img src={this.props.src}></img>
                <h5>{this.props.name}</h5>
                <hr/>
            </div>
        )
    }
}
export default Card