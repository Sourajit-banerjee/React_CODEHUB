const API_ROOT = process.env.REACT_APP_API_URL_CODEHUB;

export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  signUp: () => `${API_ROOT}/users/signup`,
  fetchPosts: () => `${API_ROOT}/posts?page=1&limit=5`,
};
