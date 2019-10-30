const API_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'http://form.devops.k8s/api';

export default API_ENDPOINT;


