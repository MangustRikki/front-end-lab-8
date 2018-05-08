import React, {Component} from 'react';
import Color from './Color';
import './styles';


export default class AvailableColor extends Component {
    render() {
        return (
            <div className="colors-wrap">
                {
                    this.props.colors.map((el, i) => {return <Color key={i} color={el}/>})
                }
            </div>
        )
    }
}

