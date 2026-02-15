import { apiInstanceAuth } from "../utils/axios";

export const getCourses = async () =>
  apiInstanceAuth.get("/courses").then((response) => response.data);

export const getCategories = async () =>
  apiInstanceAuth.get("/categories").then((response) => response.data);

export const getCourseById = async (id) =>
  apiInstanceAuth.get(`/courses/${id}`).then((response) => response.data);

export const createCourse = async (data) =>
  apiInstanceAuth
    .post("/courses", data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => response.data);

export const updateCourse = async (id, data) =>
  apiInstanceAuth
    .put(`/courses/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => response.data);

export const deleteCourse = async (id) =>
  apiInstanceAuth.delete(`/courses/${id}`).then((response) => response.data);

export const createContent = async (data) =>
  apiInstanceAuth
    .post("/courses/contents", data)
    .then((response) => response.data);
