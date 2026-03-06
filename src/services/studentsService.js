import { apiInstanceAuth } from "../utils/axios";

export const getStudents = async () => apiInstanceAuth.get("/students").then(res => res.data);

export const getStudentById = async (id) => apiInstanceAuth.get(`/students/${id}`).then(res => res.data);

export const createStudent = async (data) =>
  apiInstanceAuth
    .post("/students", data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => response.data);

export const updateStudent = async (data, id) =>
  apiInstanceAuth
    .put(`/students/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => response.data);

export const deleteStudent = async (id) => apiInstanceAuth.delete(`/students/${id}`).then(res => res.data);

export const getStudentsByCourseId = async (id) => apiInstanceAuth.get(`/courses/students/${id}`).then(res => res.data); 
export const addStudentsByCourseId = async (data, id) => apiInstanceAuth.post(`/courses/students/${id}`, data).then(res => res.data); 
export const deleteStudentsByCourseId = async (data, id) => apiInstanceAuth.put(`/courses/students/${id}`, data).then(res => res.data); 


