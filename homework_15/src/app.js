import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
import Search from './features/Search';
import SelectedColors from './features/SelectedColors';
import AmountColors from './features/AmountColors/';
import AvailableColors from './features/AvailableColors';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        colors: [],
        searchValue: "",
        selectedColors: [],
        error: null
    };
}

componentDidMount() {
  fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
      .then(res => res.json())
      .then(
          (data) => {
            this.setState({
              colors: data
          });
          },
          (error) => {
              this.setState({
                  error
              });
          }
      )

  }

  render() {
    return (
      <div>
        <div className="header">
          <Search/>
          <SelectedColors/>
        </div>
        <AmountColors/>
        <AvailableColors colors={this.state.colors}/>
      </div>
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);