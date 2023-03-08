import axios from "axios";

// Create new client
const createClient = async (clientdata) => {
  const response = await axios.post(
    "https://localhost:7075/api/Users/addClient",
    clientdata
  );

  return response.data;
};

// Get user Details
const getUserDetails = async (token) => {
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

// Update advisor info
const updateAdvisor = async (advisorId, newData) => {
  const response = await axios.put(
    `https://localhost:7075/api/Users/updateAdvisor?id=${advisorId}`,
    newData
  );
  return response.data;
};

const advisorService = {
  getUserDetails,
  detailsfromlocal,
  createClient,
  getClientsofAdvisor,
  updateAdvisor,
};

export default advisorService;
