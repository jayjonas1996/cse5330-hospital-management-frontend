import { Component } from "react";
import PropTypes from "prop-types";

export default class DetailTable extends Component {

    state = {
        address: this.props.data['ADDRESS'],
        errors: {
            address: ''
        }
    }

    static propTypes = {
        data: PropTypes.object.isRequired,
        editable: PropTypes.array
    };

    componentWillReceiveProps(nextProps) {
        this.setState({ address: nextProps.data['ADDRESS'] });  
      }

    addressChanged(event) {
        const value = event.target.value;

        let errors = this.state.errors;
        if (value === '') {
            errors.address =  'Address cannot be empty';
        } else if (value <= 90 && value >= 5) {
            errors.address = 'Address should be between 5 to 90 characters long';
        } else {
            errors.address = '';
            this.setState({errors, address: value});
        }
    }

    update() {
        if (!this.state.errors.address) {
            this.props.callback(this.state.address)
        }
    }

    render() {
        let elements = [];
        const { props: { data, editable } } = this;
        for(var key of Object.keys(data)) {
            if (editable.indexOf(key) > -1) {
                elements.push(<tr><td key={'name-' + key}>{key}</td><td key={'value-' + key}><input onChange={(evt) => this.addressChanged(evt)} style={{width: 300}} type='text' value={this.state.address || '-'}></input></td></tr>)
            } else {
                elements.push(<tr><td key={'name-' + key}>{key}</td ><td key={'value-' + key}>{data[key] || '-'}</td></tr>)
            }
        }

        return (
            <div style={{padding: 30}}>
                <table>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
                <div>
                    <button onClick={() => this.update()}>Update</button>
                    <br/>
                    {this.state.errors.address && <span className='error'>{this.state.errors.address}</span>}
                </div>
            </div>
        )
    }
}
