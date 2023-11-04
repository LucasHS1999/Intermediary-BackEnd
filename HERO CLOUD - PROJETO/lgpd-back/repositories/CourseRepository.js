import Course from "../models/Course.js";

const saveCourse = async (CourseModel) => {
  const save = await Course.create(CourseModel);
  return save;
};

const getCourseById = async (id) => {
  return await Course.findByPk(id);
};

const getAllCourses = async (CourseModel) => {
  return await Course.findAll({
    order: [["id", "ASC"]],
  });
};

const deleteCoursesById = async (id) => {
  return await Course.destroy({ where: { id: id } });
};

const updateCourseById = async (id, CourseModel) => {
  try {
    const result = await Course.update(CourseModel, {
      where: { id: id },
    });
    if (result[0] === 1) {
      return { message: "user updated with sucess" };
    } else {
      return { message: `can not find ${id} to update`, status: 404 };
    }
  } catch (error) {
    console.error();
  }
};

const factory = {
  saveCourse,
  getCourseById,
  getAllCourses,
  deleteCoursesById,
  updateCourseById,
};

export default factory;
