import { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import ProjectAPIs from "../../services/projectApi.service";
import Table from "../table/table.component";
import {convertDateToString, convertToTableData} from './../../utils/utils';

export default class Report3 extends Component {

    state = {
        data: null,
        errors: {
            dates: ''
        }
    }

    constructor(props) {
        super(props);
        this.start_date = new Date();
        this.end_date = new Date();
    }

    setStartDate(d) {
        this.start_date = d;
    }

    setEndDate(d) {
        this.end_date = d;
    }

    submit() {
        if(this.start_date !== null && this.start_date !== undefined && 
            this.end_date !== null && this.end_date !== undefined &&
            !(this.start_date > this.end_date)) {
                this.setState({ 
                    errors: { dates: '' }
                 })
            const data = {
                'start_date': convertDateToString(this.start_date),
                'end_date': convertDateToString(this.end_date),
                'format': 'yyyy/mm/dd'
            }
            ProjectAPIs.getBusiestDepartmentBetweenDates(data).then((result) => {
                if (result.rows.length > 0) {
                    this.setState({
                        data: convertToTableData(result)
                    })
                }
            });
        } else {
            let errors = this.state.errors;
            if (this.start_date === null || this.start_date === undefined || this.start_date === '' ||
            this.end_date === null || this.end_date ===undefined || this.end_date === '') {
                errors.dates = 'Dates cannot be empty';
            } else if (this.start_date > this.end_date) {
                errors.dates = 'Start date cannot be further than end date'
            }
            this.setState({errors})
        }
    }

    render() {
        const today = new Date();
        return (
            <div>
                <div style={{display: 'flex', alignItems: "baseline"}}>
                    select start date: <div style={{width: 100, marginRight: 80}}><DatePicker selected={today} onChange={(date) => this.setStartDate(date)} /></div>  
                    select end date:   <div style={{width: 100}}><DatePicker selected={today} onChange={(date) => this.setEndDate(date)} /></div> 
                    <button style={{marginLeft: 60}} onClick={() => this.submit()}>Submit</button> <br/>
                    <div>
                        {this.state.errors.dates && <span className='error'>{this.state.errors.dates}</span>}
                    </div>
                    
                </div>
                <div className="report-wrapper" style={{marginTop: 25}}>
                    {this.state.data && <Table data={this.state.data}></Table>}
                </div>
            </div>)
    }
}
