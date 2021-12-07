import { Component } from "react";
import ProjectAPIs from "../../services/projectApi.service";
import LocalStorage from "../../utils/localStorage";
import './login.component.css';

export default class LoginComponent extends Component {
    
    state = {
        errors: {
            employeeId: '',
        }
    }

    login() {
        if (this.loginID && this.state.errors.employeeId === '') {
            LocalStorage.set('userId', this.loginID);
            this.getUser();
        }
    }

    async getUser() {
        const result = (await ProjectAPIs.getEmployeeDetailsById(LocalStorage.get('userId'))).rows;
        if (result.length !== 0) {
            LocalStorage.set('user', JSON.stringify(result[0]));
            window.location.reload();
        } else {
            const errors = { employeeId: 'Employee does not exists'}
            this.setState({errors})
        }
    }

    updateInputValue(value) {
        const regex = RegExp('[0-9]+')
        let errors = this.state.errors;
        if (value === '' || value === null || value || undefined) {
            errors.employeeId =  'Employee Id is required';
        } else if (value < 1) {
            errors.employeeId = 'Employee Id cannot be negative or 0';
        } else if (!regex.test(value)) {
            errors.employeeId = 'Invalid value';
        } else {
            errors.employeeId = '';
        }
        this.loginID = value;
        this.setState({errors});

    }

    render() {
        return (
            <div className='login-wrapper'>
                <div className='login-form'>
                    <span className='login-title'>Employee Login</span> <br/>
                    <input className='login-input' type='number' id="user-id" onChange={e => this.updateInputValue(e.target.value)}/> <br/>
                    <button className='login-btn' onClick={evt => this.login()}>Login</button>
                    <br/>
                    {this.state.errors.employeeId && <span className='error'>{this.state.errors.employeeId}</span>}
                </div>

            </div>
        );
    }
}
