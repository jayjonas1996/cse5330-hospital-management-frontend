export default class Shift {
    constructor(obj) {
        if(obj) {
            this.emp_id = obj.EMP_ID;
            this.start_time = obj.START_TIME;
            this.end_time = obj.END_TIME;
        }
    }
}
