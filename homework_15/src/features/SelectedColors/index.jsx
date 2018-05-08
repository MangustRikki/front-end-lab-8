import React, {Component} from 'react';
import './styles';

export default class SelectedColors extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="colorsDefault-wrap">
                <div className="color-default purple"></div>
                <div className="color-default blue"></div>
                <div className="color-default grey"></div>
            </div>
        )
    }
}