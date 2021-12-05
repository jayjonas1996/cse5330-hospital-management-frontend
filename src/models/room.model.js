export default class Room {
    constructor(obj) {
        if(obj) {
            this.r_id = obj.R_ID;
            this.room_name = obj.ROOM_NAME;
            this.room_type = obj.room_type;
            this.charge = obj.charge;
            this.d_id = obj.D_ID;
        }
    }
}
