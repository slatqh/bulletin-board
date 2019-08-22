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
    // console.log('FORM API', postId);
    try {
      axios.post(`${keys.LOCALHOST}/api/delete/`, { id });
      // return data;
    } catch (error) {
      throw error;
    }
  }

  // async signUp(args) {
  //   try {
  //     const { data } = await axios.post(`${keys.LOCALHOST}/user/signup`, {
  //       ...args,
  //     });
  //     return data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async signOut() {
  //   try {
  //     const { data } = await axios.post(`${keys.LOCALHOST}/user/signout`);
  //     return data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // async profileUpdate(args) {
  //   try {
  //     const { data } = await axios.post(`${keys.LOCALHOST}/user`, { ...args });
  //     return data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

export const Post = new PostApi();
