/* eslint-disable no-unused-vars */
export default function createIteratorObject(report) {
 let employees = []
 let result = []
	for (const value of Object.values(report.allEmployees)){
	 employees.push(value);
	}
	for (const element of employees){
		result = [...result, ...element]
	}
	return result;
}
