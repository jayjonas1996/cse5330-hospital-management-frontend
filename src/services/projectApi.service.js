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
}
