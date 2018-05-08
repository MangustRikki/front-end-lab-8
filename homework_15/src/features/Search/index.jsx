import React, {Component} from 'react';
import './styles';


export default class SearchInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input className='search'
      type="text"
      placeholder="Enter color's name or tag"
      autoFocus={true}
       />
        )
    }
}