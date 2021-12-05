import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header/header.component';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if user show employee page or patient page or show login page
    return(
      <div className="App" id="main"> <HeaderComponent></HeaderComponent> </div>
    );
  }
}

export default App;
