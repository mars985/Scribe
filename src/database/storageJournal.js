import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@posts2";

export const getPosts = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Error reading posts from storage", error);
    return defaultvar;
  }
};

export const onSave = async (postHeading, contentToSave, postIndex) => {
  try {
    if (postIndex !== undefined && postIndex >= 0) {
      // Update existing post
      await updatePost(postIndex, {
        heading: postHeading,
        content: contentToSave,
      });
    } else {
      // Save new post
      await saveNewPost({ content: contentToSave, heading: postHeading });
    }
  } catch (error) {
    console.error("Error saving content", error);
  }
  // logger();
  function logger() {
    console.log("h " + postHeading);
    console.log("c " + contentToSave);
    console.log("i " + postIndex);
    console.log("");
  }
};

export const saveNewPost = async (newPost) => {
  try {
    const posts = await getPosts();
    posts.push(newPost);
    const jsonValue = JSON.stringify(posts);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error("Error saving post", error);
  }
};

export const updatePost = async (index, updatedPost) => {
  try {
    const posts = await getPosts();
    if (index >= 0 && index < posts.length) {
      posts[index] = updatedPost;
      const jsonValue = JSON.stringify(posts);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } else {
      console.warn("Invalid index for updating post");
    }
  } catch (error) {
    console.error("Error updating post", error);
  }
};

export const deletePost = async (index) => {
  try {
    const posts = await getPosts();
    if (index >= 0 && index < posts.length) {
      posts.splice(index, 1);
      const jsonValue = JSON.stringify(posts);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } else {
      console.warn("Invalid index for deleting post");
    }
  } catch (error) {
    console.error("Error deleting post", error);
  }
};

export const clearPosts = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing posts", error);
  }
};
