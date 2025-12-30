import { apiInstanceAuth } from '../utils/axios';

export const getCourses = async () => apiInstanceAuth.get('/courses').then(response => response.data);
export const getCategories = async () => apiInstanceAuth.get('/categories').then(response => response.data);