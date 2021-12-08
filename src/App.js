import React, {Component} from 'react';
import './App.css';
import HeaderComponent from './components/header/header.component';
import LoginComponent from './components/login/login.component';
import LocalStorage from './utils/localStorage';
import Tabs from './components/tabs/tabs.component'
import Report1 from './components/report1/report1.component';
import Report2 from './components/report2/report2.component';
import Report3 from './components/report3/report3.component';
import Report4 from './components/report4/report4.component';
import Report5 from './components/report5/report5.component';
import Report6 from './components/report6/report6.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.user = LocalStorage.getLoggedInUser();
  }

  render() {
    return(
      <div className='App' id='main'> <HeaderComponent></HeaderComponent> 
        <div className='main-content'>
          { this.user ? (
            <Tabs>

              <div label="#1: Relation">
                <Report1></Report1>
              </div>

              <div label="#2: Update">
                <Report2></Report2>
              </div>
              <div label="#3: aggregate queries">
                <Report3></Report3>
              </div>
              <div label="#4: Report: Revenue (cube)">
                <Report4></Report4>
              </div>
              <div label="#5: Report (roll up)">
                <Report5></Report5>
              </div>
              <div label="#6: Report: patient count by ins comp and blood group">
                <Report6></Report6>
              </div>
          </Tabs>
          ) : (<LoginComponent></LoginComponent>)}
        </div>
      </div>
    );
  }
}

export default App;
