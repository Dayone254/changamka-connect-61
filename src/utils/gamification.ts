export interface Achievement {
  id: string;
  title: string;
  description: string;
  points: number;
  icon: string;
}

export interface UserProgress {
  points: number;
  level: number;
  achievements: string[];
}

const PROGRESS_KEY = 'user_progress';

export const achievements: Achievement[] = [
  {
    id: 'first_story',
    title: 'First Story',
    description: 'Published your first story',
    points: 100,
    icon: 'pencil',
  },
  {
    id: 'offline_reader',
    title: 'Offline Reader',
    description: 'Saved first story for offline reading',
    points: 50,
    icon: 'book',
  },
  {
    id: 'active_commenter',
    title: 'Active Commenter',
    description: 'Left 5 comments on stories',
    points: 75,
    icon: 'message-circle',
  },
];

export const getUserProgress = (): UserProgress => {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{"points": 0, "level": 1, "achievements": []}');
  } catch {
    return { points: 0, level: 1, achievements: [] };
  }
};

export const updateUserProgress = (achievementId: string) => {
  const progress = getUserProgress();
  const achievement = achievements.find(a => a.id === achievementId);
  
  if (achievement && !progress.achievements.includes(achievementId)) {
    progress.achievements.push(achievementId);
    progress.points += achievement.points;
    progress.level = Math.floor(progress.points / 100) + 1;
    
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    return true;
  }
  return false;
};