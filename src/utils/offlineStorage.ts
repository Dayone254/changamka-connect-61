// Function to save stories for offline reading
export const saveForOffline = (story: any) => {
  const OFFLINE_STORAGE_KEY = 'offline_stories';
  try {
    const existingStories = JSON.parse(localStorage.getItem(OFFLINE_STORAGE_KEY) || '[]');
    const updatedStories = [...existingStories, story];
    localStorage.setItem(OFFLINE_STORAGE_KEY, JSON.stringify(updatedStories));
    return true;
  } catch (error) {
    console.error('Error saving story offline:', error);
    return false;
  }
};

// Function to get offline stories
export const getOfflineStories = () => {
  const OFFLINE_STORAGE_KEY = 'offline_stories';
  try {
    return JSON.parse(localStorage.getItem(OFFLINE_STORAGE_KEY) || '[]');
  } catch (error) {
    console.error('Error getting offline stories:', error);
    return [];
  }
};