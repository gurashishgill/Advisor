import axios from "axios";

// const API_URL = "/api/goals/";

// Create new client
const createClient = async (clientdata) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const response = await axios.post(
    "https://localhost:7075/api/Users/addClient",
    clientdata
  );

  return response.data;
};

// Get user Details
const getUserDetails = async (token) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };

  const response = await axios.get(
    `https://localhost:7075/api/Users/user?token=${token}`
  );

  if (response.data) {
    localStorage.setItem("userinfo", JSON.stringify(response.data));
  }

  return response.data;
};

const detailsfromlocal = () => {
  localStorage.getItem("userinfo");
};

const getClientsofAdvisor = async (advisorid) => {
  const response = await axios.get(
    `https://localhost:7075/api/Users/getclients?advisorID=${advisorid}`
  );
  return response.data;
};

// Delete user goal
// const deleteGoal = async (goalId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.delete(API_URL + goalId, config);

//   return response.data;
// };

const advisorService = {
  // createGoal,
  getUserDetails,
  detailsfromlocal,
  createClient,
  getClientsofAdvisor,
  // deleteGoal,
};

export default advisorService;
