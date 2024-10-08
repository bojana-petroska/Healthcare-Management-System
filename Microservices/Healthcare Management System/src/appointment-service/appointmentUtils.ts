//import appointmentController from "./appointmentController.js";

//const appointmentsData = appointmentController.getAllAppointments;

const filterByStatus = (appointmentsData, query) => {
  const filteredData = appointmentsData.filter((app) => app.status === query);
  return filteredData;
};

const filterByDoctorsName = (appointmentsData, query) => {
  const filteredData = appointmentsData.filter((app) => app.doctor.name === query);
  return filteredData;
};

// const sortByDate = (appointmentsData, order = 'asc') => {
//   const sortedData = appointmentsData.sort((a, b) => {
//     const dateA = new Date(a.date);
//     const dateB = new Date(b.date);

//     if (order === 'desc') {
//       return dateB - dateA;
//     }
//     return dateA - dateB;
//   });
//   return sortedData;
// };

export default {
  filterByStatus,
  filterByDoctorsName,
};
