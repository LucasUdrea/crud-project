import axios from "axios";

const EMPLOYEE_API_BASE_URL ="http://localhost:8080/api/v1/employees";

class employeeService{

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(id) {
        const url = `${EMPLOYEE_API_BASE_URL}/${id}`; // Appending the ID to the base URL
        return axios.get(url);
    }

    updateEmployee(employee, id){
        const url = `${EMPLOYEE_API_BASE_URL}/${id}`;
        return axios.put(url,employee);
    }

}

export default new employeeService()