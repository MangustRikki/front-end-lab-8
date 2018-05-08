import React, {Component} from 'react';
import './styles';

export default class Color extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let backgroundStyle = {
            background: this.props.color.color
        }
        return(
            <div className="color-card" style={backgroundStyle} id={this.props.index}>
                <button><i className="material-icons">add</i><span>Add</span></button>
            </div>
        )
    }
}