import React, {Component} from "react";
import LocalStorage from './../../utils/localStorage';
import './header.component.css';

class HeaderComponent extends Component {
    // if exist show name and logout button
    
    constructor(props) {
        super(props);
        this.isLoggedin = Boolean(LocalStorage.get('user'));
        this.userFullName = 0;
    }
    

    render() {
        return <div class="header">
            
            { this.isLoggedin ? (
                <div class='logout-wrapper'>
                    <button class='logout-btn'>Logout</button>
                </div>
            ) : null }
            
        </div>
    }
}

export default HeaderComponent;
