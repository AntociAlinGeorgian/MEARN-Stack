import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //apply to every request
    axios.defaults.header.common["Authorization"] = token;
  } else {
    //delete auth header
    delete axios.defaults.header.common["Authorization"];
  }
};

export default setAuthToken;
