import { apiInstanceAuth } from '../utils/axios';

export const getCourses = async () => apiInstanceAuth.get('/courses').then(response => response.data);