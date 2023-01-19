import axios from "axios";
import jwt_decode from "jwt-decode";
import * as redux from "../redux/Auth/authSlice";

export const login = async (dispatch, newUser) => {
    try {
        let res = await axios.post(process.env.REACT_APP_BACKEND + "/auth/login", { email: newUser.email, password: newUser.password });
        if (res.status !== 200) {
            localStorage.removeItem("token");
            return res;
        }
        let { token } = res.data;
        localStorage.setItem("token", token);
        dispatch(redux.login(token));
    } catch (error) {
        console.log(error);
        return;
    }
}

export const register = async (dispatch, newUser) => {
    try {
        let res = await axios.post(process.env.REACT_APP_BACKEND + "/auth/register", { ...newUser });
        if (res.status !== 200) {
            console.log("error " + res.status);
            localStorage.removeItem("token");
            return res;
        }
        let { token } = res.data;
        localStorage.setItem("token", token);
        dispatch(redux.register(token));
    } catch (error) {
        console.log(error);
        return;
    }
}
export const logout = () => {
    try {

    } catch (error) {

    }
}
export const getUser = async (dispatch, token) =>{
    if (token) {
      const userid = (jwt_decode(token))._id;
      try {
        let user = await axios.get(process.env.REACT_APP_BACKEND + "/users/" + userid);
        dispatch(redux.setUser(user.data));
        
      } catch (error) { 
          console.log(error);
          return;
        }
    }
  }