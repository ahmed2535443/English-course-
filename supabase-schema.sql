-- حذف الجداول القديمة إذا وجدت
DROP TABLE IF EXISTS user_progress CASCADE;
DROP TABLE IF EXISTS friends CASCADE;

-- إنشاء جدول التقدم
CREATE TABLE user_progress (
  user_id TEXT PRIMARY KEY,
  xp INT DEFAULT 0,
  streak INT DEFAULT 0,
  best_streak INT DEFAULT 0,
  daily_count INT DEFAULT 0,
  total_exercises INT DEFAULT 0,
  correct_answers INT DEFAULT 0,
  words_learned INT DEFAULT 0,
  completed_lessons JSONB DEFAULT '[]',
  lesson_progress JSONB DEFAULT '{}',
  achievements JSONB DEFAULT '[]',
  srs_data JSONB DEFAULT '[]',
  activity JSONB DEFAULT '{}',
  onboarding_complete BOOLEAN DEFAULT false,
  user_goal TEXT,
  daily_time INT DEFAULT 10,
  dark_mode BOOLEAN DEFAULT false,
  speech_speed REAL DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- إنشاء جدول الأصدقاء
CREATE TABLE friends (
  user_id TEXT,
  friend_id TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (user_id, friend_id)
);
