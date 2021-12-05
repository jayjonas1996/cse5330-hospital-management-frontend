export default class InsuranceCompany {
    constructor(obj) {
        if(obj) {
            this.p_id = obj.P_ID;
            this.ins_comp = obj.INS_COMP;
        }
    }
}
