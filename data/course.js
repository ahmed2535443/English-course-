import { LEVELS as CURRICULUM_LEVELS, getLevelById, getCategoryById, getLessonById, getCategoriesForLevel, getLessonsForCategory, getLevelForCategory, getCategoryForLesson, getLevelForLesson, getAllPublishedLevels, getAllLessons } from './curriculum';

export const COURSE = {
  id: "zamerican-english",
  title: "ZAmericanEnglish",
  subtitle: "تعلم الإنجليزية من الصفر إلى الاحتراف",
  description: "كورس شامل لتعلم اللغة الإنجليزية بالطريقة الأمريكية",
  totalLevels: 4,
  totalLessons: 13,
};

export const LEVELS = CURRICULUM_LEVELS;

export function getLevel(id) {
  return getLevelById(id);
}

export function getCourse(id) {
  return getCategoryById(id);
}

export function getLesson(id) {
  return getLessonById(id);
}

export function getUnitsForLevel(levelId) {
  return getCategoriesForLevel(levelId);
}

export function getLessonsForUnit(courseId) {
  return getLessonsForCategory(courseId);
}

export function getUnitByLessonId(lessonId) {
  return getCategoryForLesson(lessonId);
}

export function getLevelForUnit(unitId) {
  return getLevelForCategory(unitId);
}

export function getTotalUnits() {
  let count = 0;
  for (const level of CURRICULUM_LEVELS) {
    count += level.categories.length;
  }
  return count;
}

export function getTotalLevels() {
  return CURRICULUM_LEVELS.length;
}

export function getPublishedLevels() {
  return getAllPublishedLevels();
}

export function getAllCourseLessons() {
  return getAllLessons();
}
