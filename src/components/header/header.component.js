import React, {Component} from "react";
import LocalStorage from './../../utils/localStorage';
import './header.component.css';

class HeaderComponent extends Component {
    
    constructor(props) {
        super(props);
        this.user = LocalStorage.get('user') ? JSON.parse(LocalStorage.get('user')) : null;
    }
    
    logout() {
        LocalStorage.clearLoginInfo();
        window.location.reload();
    }

    render() {
        return <div className="header">
            { this.user ? (
                <span>
                    <b>Welcome, {this.user.FIRST_NAME + ' ' + this.user.LAST_NAME}</b>
                </span>
            ) : null }
            { this.user ? (
                <div className='logout-wrapper'>
                    <button className='logout-btn' onClick={() => this.logout()}>Logout</button>
                </div>
            ) : null }
        </div>
    }
}

export default HeaderComponent;
