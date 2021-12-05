export default class EmergencyContactPerson {
    constructor(obj) {
        this.p_id = obj.P_ID;
        this.name = obj.NAME;
        this.address = obj.ADDRESS;
        this.phone_number = obj.PHONE_NUMBER;
        this.relationship = obj.RELATIONSHIP;
    }
}
