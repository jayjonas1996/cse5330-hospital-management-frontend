import { Component } from "react";
import LocalStorage from "../../utils/localStorage";
import './login.component.css';
import {CONSTANTS} from "../../utils/constants";

export default class LoginComponent extends Component {
    
    login() {
        if (this.loginID) {
            LocalStorage.set('userId', this.loginID);
            window.location.reload();
        }
    }

    updateInputValue(evt) {
        this.loginID = evt.target.value;
    }

    render() {
        return (
            <div className='login-wrapper'>
                <div className='login-form'>
                    <span className='login-title'>Employee Login</span> <br/>
                    <input className='login-input' type='text' id="user-id" onChange={evt => this.updateInputValue(evt)}/> <br/>
                    <button className='login-btn' onClick={evt => this.login()}>Login</button>
                </div>

            </div>
        );
    }
}
