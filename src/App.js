import React, {Component} from 'react';
import './App.css';
import HeaderComponent from './components/header/header.component';
import LoginComponent from './components/login/login.component';
import LocalStorage from './utils/localStorage';
import Tabs from './components/tabs/tabs.component'

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
              <div label="Gator">
                See ya later, <em>Alligator</em>!
              </div>
              <div label="Croc">
                After 'while, <em>Crocodile</em>!
              </div>
              <div label="Sarcosuchus">
                Nothing to see here, this tab is <em>extinct</em>!
              </div>
          </Tabs>
          ) : (<LoginComponent></LoginComponent>)}
        </div>
      </div>
    );
  }
}

export default App;
