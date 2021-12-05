export default class TrusteeHireEmployee {
    constructor(obj) {
        if(obj) {
            this.emp_id = obj.EMP_ID;
            this.t_emp_id = obj.T_EMP_ID;
            this.doj = obj.DOJ;
        }
    }
}
