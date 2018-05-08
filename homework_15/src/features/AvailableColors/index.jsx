import React, {Component} from 'react';
import './styles';
import Color from './Color';

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

