import axios from "axios";

// const API_URL = "/api/goals/";

// Create new goal
// const createGoal = async (goalData, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   const response = await axios.post(API_URL, goalData, config);

//   return response.data;
// };

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
  // deleteGoal,
};

export default advisorService;
