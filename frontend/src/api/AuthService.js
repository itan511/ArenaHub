import axiosInstance from "./axiosInstance";

class AuthService {
  async login(credentials) {
    const response = await axiosInstance.post("/auth/login", {
      email: credentials.email,
      password: credentials.password,
    });

    if (response.data.access_token) {
      localStorage.setItem("accessToken", response.data.access_token);
    }

    return response.data;
  }

  async register(userData) {
    await axiosInstance.post("/auth/register", userData);
  }

  logout() {
    localStorage.removeItem("accessToken");
    window.location.href = "/auth/login";
  }

  isAuthenticated() {
    return !!localStorage.getItem("accessToken");
  }
}

const authService = new AuthService();

export default authService;
