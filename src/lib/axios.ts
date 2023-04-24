import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://graphql.contentful.com'
})

export default apiClient