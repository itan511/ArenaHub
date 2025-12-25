import axiosInstance from './axiosInstance';

class AuthService {

  convertToOAuth2Form(credentials) {
    return {
      email: credentials.email,
      password: credentials.password,
      grant_type: 'password',
      scope: 'read write'
    };
  }

  async login(credentials) {

    const formData = this.convertToOAuth2Form(credentials);

    const params = new URLSearchParams();

    params.append('email', formData.email);
    params.append('password', formData.password);

    if (formData.scope) {
      params.append('scope', formData.scope);
    }

    if (formData.grant_type) {
      params.append('grant_type', formData.grant_type);
    }

    const response = await axiosInstance.post(
      '/auth/login',
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    if (response.data.access_token) {
      localStorage.setItem('accessToken', response.data.access_token);
      localStorage.setItem('refreshToken', response.data.refresh_token);
    }

    return response.data;
  }

  async register(userData) {
    await axiosInstance.post(
      '/auth/register',
      userData
    );
  }

  logout() {
    localStorage.setItem('accessToken', "");
    localStorage.setItem('refreshToken', "");
  }

  isAuthenticated() {
    return !!localStorage.getItem('accessToken');
  }
}

const authService = new AuthService();

export default authService;