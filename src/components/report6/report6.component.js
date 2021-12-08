import { Component } from "react";
import Table from "../table/table.component";
import ProjectAPIs from "../../services/projectApi.service";
import { convertToTableData } from "../../utils/utils";

export default class Report6 extends Component {

    state = {
        selectedBloodGroup: 'AB+',
        results: null
    }

    registerChange(value) {
        this.setState({
            selectedBloodGroup: value
        });
    }

    async execute() {
        const result = await ProjectAPIs.getPatientsCountByInsuranceCompanyForBloodGroup({'blood_group': this.state.selectedBloodGroup});
        this.setState({
            results: convertToTableData(result)
        });
    }

    render() {
        return (
            <div className="report-wrapper">
                <div className="menu-wrapper">Get patients count by insurance company and 
                    <select name="select" onChange={(e) => this.registerChange(e.target.value)} defaultValue={this.state.selectedBloodGroup} style={{marginLeft: 5}}>
                        <option value={"AB+"}>AB+</option>
                        <option value={"AB-"} >AB-</option>
                        <option value={"A+"} >A+</option>
                        <option value={"A-"} >A-</option>
                        <option value={"B+"} >B+</option>
                        <option value={"B-"} >B-</option>
                        <option value={"O+"} >O+</option>
                        <option value={"O-"} >O-</option>
                    </select> blood group.
                    <button style={{marginLeft: 10}} onClick={(e) => this.execute()}>Submit</button>
                </div>
                <div className="results-wrapper">
                {this.state.results ? (<Table data={this.state.results}></Table>) : null} 
                </div>
            </div>
        );
    }
}
