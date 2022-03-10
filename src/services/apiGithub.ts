import axios from 'axios';

export const apiGithub = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: process.env.GITHUB_API_KEY
  }
})