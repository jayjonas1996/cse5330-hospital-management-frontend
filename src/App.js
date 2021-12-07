import React, {Component} from 'react';
import './App.css';
import HeaderComponent from './components/header/header.component';
import LoginComponent from './components/login/login.component';
import LocalStorage from './utils/localStorage';
import Tabs from './components/tabs/tabs.component'
import Report1 from './components/report1/report1.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.user = LocalStorage.getLoggedInUser();
  }

  render() {
    // if user show employee page or patient page or show login page
    return(
      <div className='App' id='main'> <HeaderComponent></HeaderComponent> 
        <div className='main-content'>
          { this.user ? (
            <Tabs>

              <div label="Report #1: Relation">
                <Report1></Report1>
              </div>

              <div label="Report #2">
                <div>anything <br></br>After 'while, <em>Crocodile</em>!</div>
              </div>

          </Tabs>
          ) : (<LoginComponent></LoginComponent>)}
        </div>
      </div>
    );
  }
}

export default App;
