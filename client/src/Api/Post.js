import axios from 'axios';
import { keys } from '../const/Keys';

class PostApi {
  async fetchAllposts() {
    try {
      const { data } = await axios.get(`${keys.LOCALHOST}/api/posts`, {});
      return data;
    } catch (error) {
      throw error;
    }
  }

  async deletePost(id) {
    try {
      axios.post(`${keys.LOCALHOST}/api/delete/`, { id });
      // return data;
    } catch (error) {
      throw error;
    }
  }

  async submitNewPost(args) {
    try {
      const { data } = await axios.post(`${keys.LOCALHOST}/api/posts`, {
        ...args,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async editPost(args) {
    try {
      const { data } = await axios.post(`${keys.LOCALHOST}/api/edit`, {
        ...args,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateVotes(args) {
    try {
      const { data } = await axios.post(`${keys.LOCALHOST}/api/votes`, {
        ...args,
      });
      return data;
    } catch (error) {
      throw error;
    }
  }

  async filterByVotes() {
    try {
      const { data } = await axios.post(`${keys.LOCALHOST}/api/filtervotes`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export const Post = new PostApi();
