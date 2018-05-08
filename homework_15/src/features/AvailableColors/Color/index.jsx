import React, {Component} from 'react';

export default class Color extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="color-card" style="background: {this.props.color.color}" id={this.props.index}>
                <button><i className="material-icons">add</i><span>Add</span></button>
            </div>
        )
    }
}