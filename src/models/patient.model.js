export default class Patient {
    constructor(obj) {
        if(obj) {
            this.p_id = obj.P_ID;
            this.ins_no = obj.INS_NO;
            this.first_name = obj.FIRST_NAME;
            this.last_name = obj.LAST_NAME;
            this.pssn = obj.PSSN;
            this.address = obj.ADDRESS;
            this.dob = new Date(obj.DOB);
            this.phone_number = obj.PHONE_NUMBER;
            this.r_id = obj.R_ID;
            this.blood_group = obj.BLOOD_GROUP;
        }
    }
}
