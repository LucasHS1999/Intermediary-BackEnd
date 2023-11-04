import teacherRepository from "../repositories/TeacherRepository.js";

const saveTeacher = (teacherModel) => {
  return teacherRepository.saveTeacher(teacherModel);
};

const getTeacherById = (id) => {
  return teacherRepository.getTeacherById(id);
};

const getAllTeachers = () => {
  return teacherRepository.getAllTeachers();
};

const deleteTeachersById = (id) => {
  return teacherRepository.deleteTeachersById(id);
};

const updateTeacherById = (id, teacherModel) => {
  return teacherRepository.updateTeacherById(id, teacherModel);
};

const service = {
  saveTeacher,
  getTeacherById,
  getAllTeachers,
  deleteTeachersById,
  updateTeacherById,
};

export default service;
