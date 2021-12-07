import APIHandler from "./apiHandler.service";

export default class ProjectAPIs {

    static async getAllEmployeesByType(type) {
        return await APIHandler.fetchGet(`/query/list_employees/${type}`);
    }

    static async getPatientDetailsById(id) {
        return await APIHandler.fetchGet(`/query/patient/${id}`);
    }

    static async getEmployeeDetailsById(id) {
        return await APIHandler.fetchGet(`/query/employee/${id}`);
    }

    static async updatePatientAddress(id, data) {
        return await APIHandler.fetchPost(`/query/patient/${id}`, data);
    }

    static async getReportDepartmentSexRollup() {
        return await APIHandler.fetchGet('/report/department_sex_rollup'); // TODO: change api and method name to more accurate
    }

    static async getTotalAllTimeRevenueByDepartmentAndRoomCube() {
        return await APIHandler.fetchGet('/report/revenue_department_room_cube');
    }
}
