const API_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'http://backend.default.svc.cluster.local:5000';

export default API_ENDPOINT;
