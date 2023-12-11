import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:5000/auth",
  timeout: 5000,
});

export const Login = async (email, password) => {
  try {
    const response = await api.post("/login", {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const Register = async (name, email, password) => {
  try {
    const response = await api.post("/register", {
      name: name,
      email: email,
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Register failed");
    }
  } catch (error) {
    console.error("Error Registering in:", error);
    throw error;
  }
};