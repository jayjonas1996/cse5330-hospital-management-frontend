import utils from '../utils/utils'

export default class Appointment {
    constructor(obj) {
        if (obj) {
            this.APP_ID = obj.APP_ID;
            this.START_TIME = new Date(obj.START_TIME);
            this.END_TIME = new Date(obj.END_TIME);
            this.A_DATE = new Date(utils.convertToLocalTimeZone(obj.A_DATE));
            this.R_ID = obj.R_ID;
            this.EMP_ID = obj.EMP_ID;
            this.P_ID = obj.P_ID;
        }
    }
    
}