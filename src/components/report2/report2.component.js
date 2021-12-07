import { Component } from "react";
import ProjectAPIs from "../../services/projectApi.service";
import Table2 from "../detailTable/detailTable.component";

export default class Report2 extends Component {

    state = {
        patientData: null,
        patientId: null,
        errors: {
            patientId: '',
        },
        successMessage: ''
    }

    patientIdChange(value) {
        this.setState({patientData: null, successMessage: '' })
        const regex = RegExp('[0-9]+')
        let errors = this.state.errors;
        if (value === '' || value === undefined || value === null) {
            errors.patientId =  'Patiend Id is required';
        } else if (value < 1) {
            errors.patientId = 'Patiend Id cannot be negative or 0';
        } else if (!regex.test(value)) {
            errors.patientId = 'Invalid value';
        } else {
            errors.patientId = '';
        }
        this.setState({errors, patientId: value});
    }

    submit() {
        this.patientIdChange(this.state.patientId);
        if (!this.state.errors.patientId) {
            ProjectAPIs.getPatientDetailsById(this.state.patientId).then((result) => {
                if (result.rows.length !== 0) {
                    this.fetchedPatiendID = this.state.patientId;
                    this.setState({patientData: result.rows[0], successMessage: ''});
                } else {
                    this.setState({ errors: { patientId: 'Patient does not exists'}, patientData: null });
                }
            }, (err) => {
                console.err(err);
            });
        }
    }

    async handleAddressUpdate(new_address) {
        const result = await ProjectAPIs.updatePatientAddress(this.fetchedPatiendID, {address: new_address});
        this.setState({ patientData: result[1].rows[0], successMessage: 'Update successful'})
    }

    render() {
        const {errors} = this.state;
        return (
            <div>
                <div className='form-wrapper'>
                    <span>Patiend id: </span>
                    <input name='patient_id' type="number" onChange={(e) => this.patientIdChange(e.target.value)}></input>
                    <button onClick={() => this.submit()}>Fetch</button>
                    <br/>
                    {(errors.patientId !== '' && errors.patientId !== undefined) && <span className='error'>{errors.patientId}</span>}
                </div>
                <div>
                    {this.state.patientData && <Table2 data={this.state.patientData} editable={['ADDRESS']} callback={(value) => this.handleAddressUpdate(value)}></Table2>}
                </div> <br/>
                {this.state.successMessage && <span className='success'>{this.state.successMessage}</span>}
            </div>
            
            )
        
    }

}
