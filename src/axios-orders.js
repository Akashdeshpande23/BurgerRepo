import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-f0c28.firebaseio.com/",
});

export default instance;
