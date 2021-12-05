export default class Timesheet {
    constructor(obj) {
        if(obj) {
            this.emp_id = obj.EMP_ID;
            this.start_time = new Date(obj.START_TIME);
            this.end_time = new Date(obj.END_TIME);
            this.d_date = new Date(obj.D_DATE);
        }
    }
}
