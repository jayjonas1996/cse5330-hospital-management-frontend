import { Component } from "react";
import ProjectAPIs from "../../services/projectApi.service";
import { convertToTableData } from "../../utils/utils";
import Table from "../table/table.component";

export default class Report4 extends Component {
    state = {
        data: null
    }

    submit() {
        ProjectAPIs.getTotalAllTimeRevenueByDepartmentAndRoomCube().then((result) => {
            if (result.rows.length > 0) {
                this.setState({ data: convertToTableData(result) });
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.submit()}>Generate report</button> to get revenue by department and room using cube clause
                <div>
                    {this.state.data && <Table data={this.state.data} hasTotal={true}></Table>}
                </div>
            </div>
          );

    }
}
