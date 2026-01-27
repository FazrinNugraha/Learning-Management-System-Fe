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
