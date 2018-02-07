import api from '../config/api';

// Get post(s)
const get = (id) => api.get(id ? `posts/${id}` : 'posts');

export default {
  get
}