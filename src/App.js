import React, {Component} from 'react';
import './App.css';
import HeaderComponent from './components/header/header.component';
import LoginComponent from './components/login/login.component';
import LocalStorage from './utils/localStorage';
import Tabs from './components/tabs/tabs.component'
import Report1 from './components/report1/report1.component';
import Report2 from './components/report2/report2.component';

import ReportY from './components/reportY/reporty.component';
import ReportZ from './components/reportZ/reportz.component';

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

              <div label="#1: Relation">
                <Report1></Report1>
              </div>

              <div label="#2: Update">
                <Report2></Report2>
              </div>
              <div label="#3: aggregate queries">
                In progress
              </div>
              <div label="#Y: Report Y">
                <ReportY></ReportY>
              </div>
              <div label="#Z: Report Z">
                <ReportZ></ReportZ>
              </div>
          </Tabs>
          ) : (<LoginComponent></LoginComponent>)}
        </div>
      </div>
    );
  }
}

export default App;
