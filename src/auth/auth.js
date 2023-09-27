import axios from "axios";
import jwt_decode from "jwt-decode";
import * as redux from "../redux/Auth/authSlice";

export const login = async (dispatch, newUser) => {
    // dispatch(viewLoader());
    try {
        let res = await axios.post(process.env.REACT_APP_BACKEND + "/auth/login", { email: newUser.email, password: newUser.password });
        if (res.status !== 200 || !res.data.success) {
            localStorage.removeItem("token");
            alert(res.data.message);
            return res;
        }
        let { token } = res.data.data;
        localStorage.setItem("token", token);
        dispatch(redux.login(token));
        return;
    } catch (error) {
        alert('Something Went Wrong');
        return;
    }
}

export const register = async (dispatch, newUser) => {
    try {
        // dispatch(viewLoader());
        let res = await axios.post(process.env.REACT_APP_BACKEND + "/auth/register", { ...newUser });
        if (res.status !== 200 || !res.data.success) {
            localStorage.removeItem("token");
            alert(res.data.message);
            return res;
        }
        let { token } = res.data.data;
        localStorage.setItem("token", token);
        dispatch(redux.register(token));
        // dispatch(hideLoader());
    } catch (error) {
        alert('Something went wrong ');
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