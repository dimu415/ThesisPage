// Shuffle the posts array and pick 3 random posts, then push them to items

import { useCounterStore } from '@/store/DataManager.js'

const store =useCounterStore()

export const getRandomPosts = () => {
    const randomPosts = [...store.posts].sort(() => Math.random() - 0.5).slice(0, 3);
    return pushPostsToItems(randomPosts);
  };
  
  // Sort posts by reverse chronological order (newest first) and push them to items
  export const sortPostsReverseChronologically = () => {
    const reverseChronPosts = [...store.posts].sort((a, b) => new Date(b.Date) - new Date(a.Date));
    return pushPostsToItems(reverseChronPosts);
  };
  
  // Sort posts by chronological order (oldest first) and push them to items
 export const sortPostsChronologically = () => {
    const chronPosts = [...store.posts].sort((a, b) => new Date(a.Date) - new Date(b.Date));
    return pushPostsToItems(chronPosts);
  };
  
  // Push a list of posts to items.value
  const pushPostsToItems = (posts) => {
    const items = [];
    
    posts.forEach(post => {
      items.push({
        id: post.PostId,
        title: post.Title,
        Main_Category: post.MainCategory,
        Sub_Category: post.SubCategory,
        date: post.Date
      });
    });
    return items
  };
  
  