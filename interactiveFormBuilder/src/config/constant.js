const API_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'http://api.devops.k8s';

export default API_ENDPOINT;
