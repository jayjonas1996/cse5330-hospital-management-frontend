export class Doctor {
    constructor(obj) {
        if (obj) {
            this.emp_id = obj.EMP_ID;
        }
    }
}

export class Trustee {
    constructor(obj) {
        if (obj) {
            this.emp_id = obj.EMP_ID;
        }
    }
}

export class Nurse {
    constructor(obj) {
        if (obj) {
            this.emp_id = obj.EMP_ID;
        }
    }
}

export class Staff {
    constructor(obj) {
        if (obj) {
            this.emp_id = obj.EMP_ID;
        }
    }
}

export default EmployeeSubClass = {
    Doctor, Trustee, Nurse, Staff
}
