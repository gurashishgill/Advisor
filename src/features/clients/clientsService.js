import axios from "axios";

// Create new client
const createClient = async (clientData) => {
  const response = await axios.post(
    "https://localhost:7075/api/Users/addClient",
    clientData
  );
  return response.data;
};

// Get clients of advisors
const getClients = async (advisorID) => {
  const response = await axios.get(
    `https://localhost:7075/api/Users/getclients?advisorID=${advisorID}`
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

const clientsService = {
  createClient,
  getClients,
};

export default clientsService;
