//import appointmentController from "./appointmentController.js";
//const appointmentsData = appointmentController.getAllAppointments;
const filterByStatus = (appointmentsData, query) => {
    const filteredData = appointmentsData.filter((app) => app.status === query);
    return filteredData;
};
const sortByStatus = (appointmentsData) => {
    const sortedData = appointmentsData.query === 'desc' ? -1 : 1;
    return sortedData;
};
export default {
    filterByStatus,
    sortByStatus,
};
