export default class Employee {
    
    constructor(obj) {
        if (obj) {
            this.EMP_ID = obj.EMP_ID;
            this.SSN = obj.SSN;
            this.FIRST_NAME = obj.FIRST_NAME;
            this.LAST_NAME = obj.LAST_NAME;
            this.SEX = obj.SEX;
            this.SALARY = obj.SALARY;
            this.ADDRESS = this.ADDRESS;
            this.PHONE_NUMBER = obj.PHONE_NUMBER;
            this.DOB = new Date(obj.DOB);
            this.D_ID = obj.D_ID;
        }
    }
}
