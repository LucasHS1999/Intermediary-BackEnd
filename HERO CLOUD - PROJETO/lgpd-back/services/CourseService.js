import courseRepository from "../repositories/CourseRepository.js";

const saveCourse = (courseModel) => {
  return courseRepository.saveCourse(courseModel);
};

const getCourseById = (id) => {
  return courseRepository.getCourseById(id);
};

const getAllCourses = () => {
  return courseRepository.getAllCourses();
};

const deleteCoursesById = (id) => {
  return courseRepository.deleteCoursesById(id);
};

const updateCourseById = (id, courseModel) => {
  return courseRepository.updateCourseById(id, courseModel);
};

const service = {
  saveCourse,
  getCourseById,
  getAllCourses,
  deleteCoursesById,
  updateCourseById,
};

export default service;
