import React, {Component} from "react";
import LocalStorage from './../../utils/localStorage';
import Employee from './../../models/employee.model';
import './header.component.css';
import {CONSTANTS} from "../../utils/constants";

class HeaderComponent extends Component {
    // if exist show name and logout button
    
    constructor(props) {
        super(props);
        this.isLoggedin = Boolean(LocalStorage.get('userId'));
        if (this.isLoggedin) {
            this.user = LocalStorage.getLoggedInUser();
            if (!this.user) {
                this.getUser();
            }
        }
    }

    getUser() {
        fetch("http://localhost:3000/query", { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ query: `SELECT * from naikj.f21_s001_13_employee where EMP_ID=${LocalStorage.get('userId')}`})
        }).then(res => res.json())
        .then(
        (result) => { this.user = new Employee(result.rows[0]); LocalStorage.set('user', JSON.stringify(this.user)); window.location.reload(); },
        (error) => { console.error(error); }
        );
    }
    
    logout() {
        LocalStorage.clearLoginInfo();
    }

    render() {
        return <div className="header">
            { this.user ? (
                <span>
                    Welcome {this.user.FIRST_NAME + ' ' + this.user.LAST_NAME}
                </span>
            ) : null }
            { this.isLoggedin ? (
                <div class='logout-wrapper'>
                    <button class='logout-btn' onClick={() => this.logout()}>Logout</button>
                </div>
            ) : null }
            
        </div>
    }
}

export default HeaderComponent;
