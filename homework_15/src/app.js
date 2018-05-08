import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';
import Search from './features/Search';
import SelectedColors from './features/SelectedColors';
import AmountColors from './features/AmountColors/';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Search/>
          <SelectedColors/>
        </div>
        <AmountColors/>
      </div>
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);