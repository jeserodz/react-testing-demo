import api from '../config/api';

// Get post(s)
const get = (id) => api
  .get(id ? `posts/${id}` : 'posts')
  .then(response => response.data);

export default {
  get
}