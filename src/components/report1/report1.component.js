import { Component } from "react";
import ProjectAPIs from "../../services/projectApi.service";
import { convertToTableData } from "../../utils/utils";
import Table from "../table/table.component";

export default class Report1 extends Component {

    state = {
        selectedType: 'doctor',
        results: null
    }

    registerChange(event) {
        this.setState({
            selectedType: event.target.value
        });
    }

    async execute() {
        const result = await ProjectAPIs.getAllEmployeesByType(this.state.selectedType);
        this.setState({
            results: convertToTableData(result)
        })
    }

    render() {
        return (
            <div className="report-wrapper">
                <div className="menu-wrapper">Get list of employees in
                    <select name="select" onChange={(e) => this.registerChange(e)} defaultValue={this.state.selectedType} style={{marginLeft: 5}}>
                        <option value={"doctor"}>Doctor</option>
                        <option value={"nurse"} >Nurse</option>
                        <option value={"staff"} >Staff</option>
                        <option value={"trustee"} >Trustee</option>
                    </select> category.
                    <button style={{marginLeft: 10}} onClick={(e) => this.execute()}>Submit</button>
                </div>
                <div className="results-wrapper">
                {this.state.results ? (<Table data={this.state.results}></Table>) : null} 
                </div>
            </div>
        );
    }
}
