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
        return await APIHandler.fetchGet('/report/department_sex_rollup');
    }

    static async getTotalAllTimeRevenueByDepartmentAndRoomCube() {
        return await APIHandler.fetchGet('/report/revenue_department_room_cube');
    }

    static async getBusiestDepartmentBetweenDates(data) {
        return await APIHandler.fetchPost('/report/most_busy_department', data);
    }

    static async getPatientsCountByInsuranceCompanyForBloodGroup(data) {
        return await APIHandler.fetchPost('/report/patient_count_by_insurance_company_and_bloog_group', data);
    }
}
