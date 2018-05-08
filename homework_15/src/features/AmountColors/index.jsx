import React, {Component} from 'react';
import './styles';

export default class AmountColors extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let AmountColors = 0;
        return (
            <div className="amount-colors">
                <p>Colors: {AmountColors}</p>
            </div>
        )
    }
}