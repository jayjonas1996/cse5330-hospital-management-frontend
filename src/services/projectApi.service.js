import APIHandler from "./apiHandler.service";

export default class ProjectAPIs {

    static async getAllEmployeesByType(type) {
        return await APIHandler.fetchGet(`/query/list_employees/${type}`);
    }
}
