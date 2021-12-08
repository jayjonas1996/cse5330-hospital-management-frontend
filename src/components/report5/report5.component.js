import { Component } from "react";
import ProjectAPIs from "../../services/projectApi.service";
import Table from "../table/table.component";
import { convertToTableData } from "../../utils/utils";

export default class report5 extends Component {

    state = {
        data: null
    }

    submit() {
        ProjectAPIs.getReportDepartmentSexRollup().then((result) => {
            if (result.rows.length > 0) {
                this.setState({ data: convertToTableData(result) });
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.submit()}>Generate report</button> to get count of employees by department and sex using rollup
                <div>
                    {this.state.data && <Table data={this.state.data} hasTotal={true}></Table>}
                </div>
            </div>
          );

    }
}
