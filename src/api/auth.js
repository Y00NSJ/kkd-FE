import axios from "axios";

const API_URL = "http://localhost:8000/api/";

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}token/`, {
      username,
      password,
    });
    return response.data; // { access: ..., refresh: ... }
  } catch (error) {
    throw new Error(error.response?.data?.detail || "Login failed");
  }
};

export const logout = async (refreshToken) => {
  try {
    await axios.post(`${API_URL}accounts/logout/`, { refresh: refreshToken });
    return { message: "Logout successful" };
  } catch (error) {
    throw new Error("Logout failed");
  }
};
