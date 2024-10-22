import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@posts2";

export const getPosts = async () => {
  try {
    const defaultvar = [
      {
        heading: "2024-10-29 13.00",
        content:
          "Mauris vel mi sed nulla fringilla consectetur. Etiam aliquet turpis quis ligula sodales, a tincidunt nisl scelerisque. Proin blandit, nulla sit amet scelerisque dapibus, libero magna aliquam nunc, vel faucibus purus eros eget libero.",
      },
      {
        heading: "2024-10-30 10.30",
        content:
          "Fusce euismod ex sit amet justo auctor, eu pretium nisi aliquet. Nulla sollicitudin nec libero nec mollis. Ut ac urna a justo scelerisque sollicitudin ut vitae ligula.",
      },
    ];
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Error reading posts from storage", error);
    return defaultvar;
  }
};

export const savePost = async (newPost) => {
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
