import { loadMessage } from "./utilities.js";

export const fetchBlogs = async (element = null) => {
  loadMessage("Loading...🚀", element);
  try {
    const response = await fetch("https://calm-inlet-18337.herokuapp.com/");
    if (!response.ok) {
      throw new Error("Couldn't fetch blogs'");
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
