export const CURRICULUM = {
  id: "zamerican-english",
  title: "ZAmericanEnglish",
  titleAr: "ذا امريكان انجلش",
  description: "تعلم الإنجليزية من الصفر إلى الاحتراف",
  author: "إبراهيم عادل",
  totalLevels: 4,
};

const LEVEL_CATEGORIES = [
  { id: "conversation", name: "محادثة", nameEn: "Conversation", icon: "💬", order: 1 },
  { id: "listening", name: "استماع", nameEn: "Listening", icon: "🎧", order: 2 },
  { id: "reading", name: "قراءة", nameEn: "Reading", icon: "📖", order: 3 },
  { id: "writing", name: "كتابة", nameEn: "Writing", icon: "✍️", order: 4 },
  { id: "grammar", name: "قواعد", nameEn: "Grammar", icon: "🔤", order: 5 },
  { id: "phonetics", name: "صوتيات", nameEn: "Phonetics", icon: "🗣️", order: 6 },
  { id: "americancode", name: "شفرة أمريكا", nameEn: "America Code", icon: "📰", order: 7 },
  { id: "comedy", name: "كورس كوميديا", nameEn: "Comedy Course", icon: "😄", order: 8 },
  { id: "movies", name: "مقاطع أفلام", nameEn: "Movie Clips", icon: "🎬", order: 9 },
];

function createLevel(id, name, nameEn, description, cefr, isPublished, conversationLessons = []) {
  const categories = LEVEL_CATEGORIES.map(cat => ({
    id: `L${id}-${cat.id}`,
    categoryId: cat.id,
    name: cat.name,
    nameEn: cat.nameEn,
    icon: cat.icon,
    order: cat.order,
    levelId: id,
    lessons: cat.id === "conversation" ? conversationLessons : [],
    isPublished: cat.id === "conversation" ? isPublished : false,
  }));

  return {
    id,
    name,
    nameEn,
    description,
    cefr,
    icon: isPublished ? ["📚", "🎯", "🚀", "👑"][id - 1] : "🔒",
    color: ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b"][id - 1] || "#9ca3af",
    isPublished,
    categories,
  };
}

export const LEVELS = [
  createLevel(1, "المستوى الأول", "Level 1", "تأسيس شامل للمبتدئين", "A1", true, [
    { id: 1, title: "إجراءات المطار والوحات", titleEn: "Airport Procedures", order: 1, icon: "🎫" },
    { id: 2, title: "التعارف ومحادثة الطائرة", titleEn: "Meeting & In-flight Conversation", order: 2, icon: "✈️" },
    { id: 3, title: "ضابط الهجرة والجمارك", titleEn: "Immigration & Customs Officer", order: 3, icon: "🛂" },
    { id: 4, title: "التسوق والملابس في لندن", titleEn: "Shopping & Clothing", order: 4, icon: "🛍️" },
    { id: 5, title: "صالة الوصول والاستقبال", titleEn: "Arrival Hall & Reception", order: 5, icon: "🛬" },
    { id: 6, title: "السؤال عن العدد والأمتعة", titleEn: "Asking about Quantity & Luggage", order: 6, icon: "🧳" },
    { id: 7, title: "الطقس والسفر لتايلاند", titleEn: "Weather & Travel", order: 7, icon: "🌦️" },
    { id: 8, title: "بدء المحادثات والتعارف", titleEn: "Starting Conversations", order: 8, icon: "💬" },
    { id: 9, title: "ملخص المحادثة والنطق", titleEn: "Conversation Summary & Pronunciation", order: 9, icon: "🎙️" },
  ]),
  createLevel(2, "المستوى الثاني", "Level 2", "تطوير مهارات المحادثة والاستماع", "A2", true),
  createLevel(3, "المستوى الثالث", "Level 3", "قريباً إن شاء الله", "B1", false),
  createLevel(4, "المستوى الرابع", "Level 4", "قريباً إن شاء الله", "B2", false),
];

export function getLevelById(id) {
  return LEVELS.find((l) => l.id === id);
}

export function getCategoryById(id) {
  for (const level of LEVELS) {
    const category = level.categories.find((c) => c.id === id);
    if (category) return category;
  }
  return null;
}

export function getCourseById(id) {
  return getCategoryById(id);
}

export function getLessonById(id) {
  for (const level of LEVELS) {
    for (const category of level.categories) {
      const lesson = category.lessons.find((l) => l.id === id);
      if (lesson) return lesson;
    }
  }
  return null;
}

export function getCategoriesForLevel(levelId) {
  const level = getLevelById(levelId);
  return level ? level.categories : [];
}

export function getLessonsForCategory(categoryId) {
  const category = getCategoryById(categoryId);
  return category ? category.lessons : [];
}

export function getLessonsForCourse(courseId) {
  return getLessonsForCategory(courseId);
}

export function getLevelForCategory(categoryId) {
  for (const level of LEVELS) {
    if (level.categories.find((c) => c.id === categoryId)) {
      return level;
    }
  }
  return null;
}

export function getLevelForCourse(courseId) {
  return getLevelForCategory(courseId);
}

export function getCategoryForLesson(lessonId) {
  for (const level of LEVELS) {
    for (const category of level.categories) {
      if (category.lessons.find((l) => l.id === lessonId)) {
        return category;
      }
    }
  }
  return null;
}

export function getCourseForLesson(lessonId) {
  return getCategoryForLesson(lessonId);
}

export function getLevelForLesson(lessonId) {
  for (const level of LEVELS) {
    for (const category of level.categories) {
      if (category.lessons.find((l) => l.id === lessonId)) {
        return level;
      }
    }
  }
  return null;
}

export function getAllPublishedLevels() {
  return LEVELS.filter((l) => l.isPublished);
}

export function getAllLessons() {
  const lessons = [];
  for (const level of LEVELS) {
    for (const category of level.categories) {
      for (const lesson of category.lessons) {
        lessons.push({ ...lesson, categoryId: category.id, levelId: level.id });
      }
    }
  }
  return lessons;
}
