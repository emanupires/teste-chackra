import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getAllPostsByUser = async (userId: number) => {
  const allPost = await api.get("/posts", {
    params: {
      userId,
    },
  });

  return allPost.data;
};

export const getAllPosts = async () => {
  const allPost = await api.get("/posts");

  return allPost.data;
};

export const showPostOnNewPage = async (id: number) => {
  const showPost = await api.get(`/posts/${id}`);

  return showPost.data;
};
