export const COURSE = {
  id: "zamerican-conv-l1",
  title: "كورس المحادثة الإنجليزية",
  subtitle: "المستوى الأول - المحادثات في المطار والسفر",
  description: "كورس شامل لتعلم المحادثات اليومية بالإنجليزية في سياق المطار والسفر والتسوق والتعارف",
  totalLessons: 8,
};

export const LEVELS = [
  {
    id: 1,
    title: "أساسيات المطار",
    description: "تعلم إجراءات المطار الأساسية والتعامل مع الموظفين والصعود إلى الطائرة",
    icon: "✈️",
    color: "#6366f1",
    units: [1, 2],
  },
  {
    id: 2,
    title: "الوصول والسفر",
    description: "تعلم التعامل مع ضابط الهجرة والجمارك والاستقبال في صالة الوصول",
    icon: "🛂",
    color: "#8b5cf6",
    units: [3, 4],
  },
  {
    id: 3,
    title: "المحادثة اليومية",
    description: "تعلم التسوق والشراء وسؤال الأرقام والتعامل مع الأمتعة",
    icon: "🛍️",
    color: "#ec4899",
    units: [5, 6],
  },
  {
    id: 4,
    title: "مواضيع متقدمة",
    description: "تعلم التحدث عن الطقس والسفر وبدء المحادثات مع الغرباء",
    icon: "💬",
    color: "#10b981",
    units: [7, 8],
  },
];

export const UNITS = [
  {
    id: 1,
    levelId: 1,
    title: "إجراءات المطار",
    description: "تعلم التعامل مع موظفي المطار والصعود إلى الطائرة",
    icon: "🎫",
    lessonId: 1,
    steps: ["explanation", "vocabulary", "conversation", "practice"],
  },
  {
    id: 2,
    levelId: 1,
    title: "على متن الطائرة",
    description: "تعلم التعارف والمحادثة مع ركاب الطائرة",
    icon: "✈️",
    lessonId: 2,
    steps: ["explanation", "vocabulary", "conversation", "practice"],
  },
  {
    id: 3,
    levelId: 2,
    title: "ضابط الهجرة والجمارك",
    description: "تعلم التعامل مع ضابط الهجرة والسؤال عن الغرض من الزيارة",
    icon: "🛂",
    lessonId: 3,
    steps: ["explanation", "vocabulary", "conversation", "practice"],
  },
  {
    id: 4,
    levelId: 2,
    title: "صالة الوصول والاستقبال",
    description: "تعلم الترحيب بالقادمين والتحدث عن رحلة الطيران",
    icon: "🛬",
    lessonId: 5,
    steps: ["explanation", "vocabulary", "conversation", "practice"],
  },
  {
    id: 5,
    levelId: 3,
    title: "التسوق والملابس",
    description: "تعلم شراء الملابس والأدوات في لندن",
    icon: "🛍️",
    lessonId: 4,
    steps: ["explanation", "vocabulary", "conversation", "practice"],
  },
  {
    id: 6,
    levelId: 3,
    title: "السؤال عن العدد والأمتعة",
    description: "تعلم سؤال الأرقام والتعامل مع الأمتعة في المطار",
    icon: "🧳",
    lessonId: 6,
    steps: ["explanation", "vocabulary", "conversation", "practice"],
  },
  {
    id: 7,
    levelId: 4,
    title: "الطقس والسفر لتايلاند",
    description: "تعلم التحدث عن الطقس والتخطيط للسفر",
    icon: "🌦️",
    lessonId: 7,
    steps: ["explanation", "vocabulary", "conversation", "practice"],
  },
  {
    id: 8,
    levelId: 4,
    title: "بدء المحادثات والتعارف",
    description: "تعلم كيف تبدأ محادثة مع أشخاص جدد",
    icon: "💬",
    lessonId: 8,
    steps: ["explanation", "vocabulary", "conversation", "practice"],
  },
];

export const STEP_INFO = {
  explanation: { title: "شرح الدرس", icon: "📖", description: "شرح المفاهيم والقواعد الجديدة" },
  vocabulary: { title: "الكلمات الجديدة", icon: "📝", description: "تعلم الكلمات والمصطلحات الجديدة" },
  conversation: { title: "المحادثة", icon: "🗣️", description: "تدريب على المحادثة اليومية" },
  practice: { title: "التدريبات", icon: "✏️", description: "تمارين تدريبية على محتوى الدرس" },
};

export function getLevel(id) {
  return LEVELS.find((l) => l.id === id);
}

export function getUnit(id) {
  return UNITS.find((u) => u.id === id);
}

export function getUnitsForLevel(levelId) {
  const level = getLevel(levelId);
  if (!level) return [];
  return level.units.map((uid) => getUnit(uid)).filter(Boolean);
}

export function getUnitByLessonId(lessonId) {
  return UNITS.find((u) => u.lessonId === lessonId);
}

export function getLevelForUnit(unitId) {
  const unit = getUnit(unitId);
  if (!unit) return null;
  return getLevel(unit.levelId);
}

export function getTotalUnits() {
  return UNITS.length;
}

export function getTotalLevels() {
  return LEVELS.length;
}
